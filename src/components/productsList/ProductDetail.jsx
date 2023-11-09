/* eslint-disable react/prop-types */
import { useState } from 'react'
import { deleteProducto, updateProducto } from '../../services/bbdd'
import { swalError, swalOk } from '../../services/swal'
import Button from '../Button/Button'
import './ProductDetail.css'
import FormPlanta from '../Form/FormPlanta'
import { rutas } from '../../consts/consts'

const ProductDetail = ({ prod, onClose }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [edited, setEdited] = useState({ ...prod })

  const handleChange = (e) => {
    const { name, value } = e.target
    setEdited((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleEditing = () => {
    setIsEditing(true)
  }

  const handleSave = (e) => {
    e.preventDefault()
    updateProducto(edited, rutas.productos)
      .then(() => {
        swalOk()
        setIsEditing(false)
        onClose()
      })
      .catch((error) => swalError(error))
  }

  const handleDelete = () => {
    deleteProducto(prod.id)
      .then(() => {
        swalOk()
        setIsEditing(false)
        onClose()
      })
      .catch((error) => swalError(error))
  }

  return (

    <>
      {
        isEditing ? (
          <>
            <form id='formPlanta'>
              <fieldset id="contenedorCargaPlanta">
                <h2>Editar Producto</h2>
                <div id="contenedorInputsPlanta">
                  <div id="categoria">
                    <input type="text" name="nombre" placeholder="Nombre" onChange={handleChange} value={edited.nombre} />
                  </div>
                  <div id="categoria">
                    <input type="text" name="especie" placeholder="Especie" onChange={handleChange} value={edited.especie} />
                  </div>
                  <div id="categoria">
                    <input type="text" name="genero" placeholder="Genero" onChange={handleChange} value={edited.genero} />
                  </div>
                  <div id="categoria">
                    <input type="number" name="precio" placeholder="Precio" onChange={handleChange} value={edited.precio} />
                  </div>
                  <button onClick={handleSave}>Actualizar</button>
                </div>
              </fieldset>
            </form>
          </>
        ) : (
          <>
            <h2 className='h2PD'>Detalles del Producto</h2>
            <div className='contenedorDetail'>
              <div className='productDetail'>
                <p>id: {prod.id}</p>
                <h2>{prod.nombre}</h2>
                <p>Género: {prod.genero}</p>
                <p>Especie: {prod.especie}</p>
                <p>Precio: $ {prod.precio}</p>
                <div>
                  <Button onClick={onClose} texto="Volver" color="green" />
                  <Button onClick={handleEditing} texto="Editar" color="darkgray" />
                  <Button onClick={handleDelete} texto="Eliminar" color="red" />
                </div>
              </div>
            </div>
          </>
        )
      }
    </>
  )
}

export default ProductDetail