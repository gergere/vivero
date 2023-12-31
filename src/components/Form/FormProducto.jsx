import { useState } from "react"
import "./FormProducto.css"
import { setProducto } from "../../services/bbdd"
import { rutas } from "../../consts/consts"
import { swalError, swalOk } from "../../services/swal"

const FormProducto = () => {

    const defaultValue = {
        nombre: '',
        producto:'',
        caracteristicas: '',
        descripcion: '',
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

    const handleSubmit = async (e) => {
        e.preventDefault()
        setProducto(value, rutas.producto)
            .then((res) => {
                swalOk()
                setValue(defaultValue)
                console.log(res)
            })
        .catch(error => swalError(error))
    }

    return (

        <form id='formProducto'>

            <fieldset id='contenedorCargaProducto'>

                <h2>Carga de Datos para Productos</h2>

                <div id="contenedorInputsProducto">

                    <div className="categoriaProducto">
                        <input type="text" placeholder="Nombre" name="nombre" onChange={handleChange} value={value.nombre} />
                    </div>

                    <div className="categoriaProducto">
                        <select name="producto" onChange={handleChange} value={value.producto}>
                            <option value="">Tipo de producto</option>
                            <option value="Herramientas">Herramientas</option>
                            <option value="Macetas">Macetas</option>
                            <option value="Accesorios">Accesorios</option>
                        </select>
                    </div>


                    <div className='categoriaCargaDescripcion' >
                        <textarea placeholder="Caracteristicas" name="caracteristicas" onChange={handleChange} value={value.caracteristicas}/>
                    </div>

                    <div className='categoriaCargaDescripcion' >
                        <textarea type="text" placeholder="Descripcion" name="descripcion" onChange={handleChange} value={value.descripcion}/>
                    </div>

                    <div className="categoriaProducto">
                        <input type="number" placeholder="Cantidad" name="cantidad" onChange={handleChange} value={value.cantidad}/>
                    </div>

                    <div className="categoriaProducto">
                        <input type="number" placeholder="Precio" name="precio" onChange={handleChange} value={value.precio}/>
                    </div>

                    <div id="categoriaImagen">
                        <label htmlFor="imagen">Presione AQUI para cargar una imagen</label>
                        <input id="imagen" type="file" display="none" name="imagen" onChange={handleChange} value={value.imagen}/>
                    </div>

                    <button onClick={handleSubmit}>CARGAR</button>

                </div>

            </fieldset>

        </form>

    )

}

export default FormProducto;