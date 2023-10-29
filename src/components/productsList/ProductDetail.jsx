import { useState } from 'react'
import { deleteProducto, updateProducto } from '../../services/bbdd'
import { swalOk } from '../../services/swal'

const ProductDetail = ({ prod, onClose }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [edited, setEdited] = useState({...prod})


    const handleEditing = () => {
        setIsEditing(true)
    }

    const handleChange = (e) => {
        setEdited(prev=>({ ...prev, title: e.target.value }))
    }

    const handleSave = () => {
        // updateProducto(edited)
            // .then(() => {
        swalOk()
        setIsEditing(false)
        onClose()
            // })

        console.log(edited)
    }

    const handleDelete = () => {
        // deleteProducto(prod)
            // .then(() => {
                swalOk()
                onClose()
        // })
    }

    return (

        <>
            {
                isEditing ? (
                    <>
                        <h2>Editar producto</h2>
                        <input type="text" value={edited.title} onChange={handleChange} />
                        <button onClick={handleSave}>Guardar</button>
                    </>
                ) : (
                    <div>
                        <h2>Product detail</h2>
                        <p>{prod.id}</p>
                        <p>{prod.title}</p>
                        <button onClick={onClose}>Volver</button>
                        <button onClick={handleEditing}>Editar</button>
                        <button onClick={handleDelete}>Eliminar</button>
                    </div>

                )
            }
        </>

    )
}

export default ProductDetail