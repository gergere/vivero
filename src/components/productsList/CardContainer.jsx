import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getByCategory } from '../../services/bbdd'
import { swalError } from '../../services/swal'
import './CardContainer.css'
import CardProduct from './CardProduct'
import ProductDetail from './ProductDetail'


const CardContainer = () => {

  const [data, setData] = useState([])
  const [selected, setSelected] = useState(null)
  const { cat } = useParams()

  useEffect(() => {
    getByCategory()
      .then((res) => setData(res))
      .catch((error) => swalError(error))
  }, [])

  const handleClick = (prod) => {
    setSelected(prod)
  }

  const handleClose = () => {
    setSelected(null)
  }

  return (
    <>
      {
        data.length === 0 ? (
          <>
            <h1>{cat.toUpperCase()}</h1>
            <h3>No hay productos en esta categoría</h3>
          </>
        ) : (
          <>
            {
              selected != null ? (
                <ProductDetail key={selected.id} prod={selected} onClose={handleClose} />
              ) : (
                <>
                  <h1>{cat.toUpperCase()}</h1>
                  <div className="contenedor">
                    {
                      data.map((prod) => (
                        <CardProduct key={prod.id} producto={prod} onClick={handleClick} />
                      ))
                    }
                  </div>
                  <div className="botones">
                    <Link to="/formCarga"><button>Agregar</button></Link>
                    <button>Modificar</button>
                    <button>Eliminar</button>
                  </div>
                </>
              )
            }
          </>
        )
      }
    </>)
}

export default CardContainer