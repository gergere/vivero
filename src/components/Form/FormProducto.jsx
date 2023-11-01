import { useEffect, useState } from "react"
import "./FormProducto.css"
import { getProductoById, setProducto, updateProducto } from "../../services/bbdd"
import { rutas } from "../../consts/consts"
import { swalError, swalOk } from "../../services/swal"
import { useParams } from "react-router-dom"

const FormProducto = () => {

    const { id } = useParams()
    const [value, setValue] = useState({
        nombre: '',
        producto: '',
        caracteristicas: '',
        descripcion: '',
        precio: '',
        imagen: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setValue((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        // si id existe es porque estamos editando un producto que ya existe
        if (id) {
            console.log(value)
            updateProducto(value, rutas.productos, id)
                .then((res) => {
                    swalOk()
                    setValue(defaultValue)
                    console.log(res)
                })
                .catch(error => swalError(error))
            // sino creamos un producto nuevo
        } else {
            setProducto(value, rutas.productos)
                .then((res) => {
                    swalOk()
                    setValue(defaultValue)
                    console.log(res)
                })
                .catch(error => swalError(error))
        }
    }

    useEffect(() => {
        // si id existe es porque esta cargado un producto para actualizar
        if (id) {
            getProductoById(id).then((res) => {
                res = res[0]
                const r = {
                    descripcion: res.descripcion,
                    id: res.id_producto,
                    nombre: res.nombre_producto,
                    precio: res.precio_producto,
                    producto: res.tipo_producto,
                    caracteristicas: res.caracteristicas
                }
                setValue((prev) => ({
                    ...prev,
                    ...r
                }))
            })
        }
    }, [id, setValue])

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
                            <option value="herramientas">Herramientas</option>
                            <option value="macetas">Macetas</option>
                            <option value="accesorios">Accesorios</option>
                        </select>
                    </div>


                    <div className='categoriaCargaDescripcion' >
                        <textarea placeholder="Caracteristicas" name="caracteristicas" onChange={handleChange} value={value.caracteristicas} />
                    </div>

                    <div className='categoriaCargaDescripcion' >
                        <textarea type="text" placeholder="Descripcion" name="descripcion" onChange={handleChange} value={value.descripcion} />
                    </div>

                    {/* <div className="categoriaProducto">
                        <input type="number" placeholder="Cantidad" name="cantidad" onChange={handleChange} value={value.cantidad} />
                    </div> */}

                    <div className="categoriaProducto">
                        <input type="number" placeholder="Precio" name="precio" onChange={handleChange} value={value.precio} />
                    </div>

                    <div id="categoriaImagen">
                        <label htmlFor="imagen">Presione AQUI para cargar una imagen</label>
                        <input id="imagen" type="file" display="none" name="imagen" onChange={handleChange} value={value.imagen} />
                    </div>

                    <button onClick={handleSubmit}>CARGAR</button>

                </div>

            </fieldset>

        </form>

    )

}

export default FormProducto;