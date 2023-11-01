import { deleteProducto } from '../../services/bbdd'
import { swalError, swalOk } from '../../services/swal'
import Button from '../Button/Button'
import './ProductDetail.css'
import { useNavigate } from 'react-router-dom'

const ProductDetail = ({ prod, onClose }) => {

  const navigate = useNavigate()

  const handleEditing = () => {

    if (prod.descripcion) {
      navigate(`/formCarga/producto/${prod.id}`)
    } else {
      navigate(`/formCarga/planta/${prod.id}`)
    }
  }

  const handleDelete = () => {
    deleteProducto(prod.id)
      .then(() => {
        swalOk()
        onClose()
      })
      .catch((error) => swalError(error))
  }

  return (

    <>
      {
        <>
          <h2 className='h2PD'>Detalles del Producto</h2>
          <div className='contenedorDetail'>
            <div className='productDetail'>
              <p>id: {prod.id}</p>
              <h2>{prod.nombre}</h2>
              {
                prod.descripcion ?
                  <>
                    <p>Tipo de producto: {prod.producto}</p>
                    <p>Descripcion: {prod.descripcion}</p>
                    <p>Caracteristicas: {prod.caracteristicas}</p>
                  </> :
                  <>
                    <p>Género: {prod.genero}</p>
                    <p>Especie: {prod.especie}</p>
                  </>
              }
              <p>Precio: $ {prod.precio}</p>
              <div>
                <Button onClick={onClose} texto="Volver" color="green" />
                <Button onClick={handleEditing} texto="Editar" color="darkgray" />
                <Button onClick={handleDelete} texto="Eliminar" color="red" />
              </div>
            </div>
          </div>
        </>

      }
    </>
  )
}

export default ProductDetail