import { useState } from "react"
import "./FormPlanta.css"
import { setProducto } from "../../services/bbdd"
import { swalOk } from "../../services/swal"
import { rutas } from "../../consts/consts"

const FormPlanta = () => {

    const defaultValue = {
        nombre: '',
        esSemilla: false,
        especie: '',
        genero: '',
        cantidad: '',
        precio: '',
        imagen: ''
    }

    const [value, setValue] = useState(defaultValue)

    const handleChange = (e) => {
        const { name, value } = e.target
        setValue((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleCheckChange = (e) => {
        setValue((prev) => ({
            ...prev,
            esSemilla : e.target.checked
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setProducto(value, rutas.producto)
        .then((res) => {
            swalOk()
            setValue(defaultValue)
            console.log(res)
        })
    .catch(error => console.error('Error al cargar la planta: ', error))
    }

    return (

        <form id='formPlanta'>
            <fieldset id="contenedorCargaPlanta">

                <h2>Carga de Datos para Plantas</h2>

                <div id="contenedorInputsPlanta">

                    <div id="categoria">
                        <input type="text" name="nombre" placeholder="Nombre" onChange={handleChange} value={value.nombre}/>
                    </div>

                    <div id="categoriaSemilla">
                        <label>Semilla</label>
                        <input type="checkbox" name="esSemilla" onChange={handleCheckChange} value={value.esSemilla}/>
                    </div>


                    <div id="categoria">
                        <input type="text" name="especie" placeholder="Especie" onChange={handleChange} value={value.especie}/>
                    </div>

                    <div id="categoria">
                        <input type="text" name="genero" placeholder="Genero" onChange={handleChange} value={value.genero}/>
                    </div>

                    <div id="categoria">
                        <input type="number" name="cantidad" placeholder="Cantidad" onChange={handleChange} value={value.cantidad}/>
                    </div>

                    <div id="categoria">
                        <input type="number" name="precio" placeholder="Precio"  onChange={handleChange} value={value.precio}/>
                    </div>

                    <div id="categoriaImagen">
                        <label htmlFor="imagen">Presione AQUI para cargar una imagen</label>
                        <input id="imagen" name="imagen" type="file" display="none" onChange={handleChange} value={value.imagen}/>
                    </div>

                    <button onClick={handleSubmit}>CARGAR</button>

                </div>

            </fieldset>

        </form>

    )


}

export default FormPlanta;