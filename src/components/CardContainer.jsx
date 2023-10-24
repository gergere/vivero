import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getByCategory } from '../services/bbdd'
import './CardContainer.css'


const CardContainer = () => {

    const [data, setData] = useState([])
    const { cat } = useParams()

    // useEffect(() => {
    //     getByCategory()
    //         .then((data)=>setData(data))
    // }, [])

  return (
      <>  
          <h1>{cat}</h1>
          <div class="contenedor">
            <div><h4>Planta 1</h4> 
            <div class="imagen1"></div>
            </div>
            <div><h4>Planta 2</h4>
            <div class="imagen2"></div>
            </div>
            <div><h4>Planta 3</h4>
            <div class="imagen3"></div>
            </div>
            <div><h4>Planta 4</h4>
            <div class="imagen4"></div>
            </div>
            <div><h4>Planta 5</h4>
            <div class="imagen5"></div>
            </div>
            <div><h4>Planta 6</h4>
            <div class="imagen6"></div>
            </div> 
            <div><h4>Planta 7</h4>
            <div class="imagen7"></div>
            </div>
            <div><h4>Planta 8</h4>
            <div class="imagen8"></div>
            </div>
            <div><h4>Planta 9</h4>
            <div class="imagen9"></div>
            </div>     

            
          </div>
          <div class="botones">
            <button>Agregar</button>
            <button>Modificar</button>
            <button>Eliminar</button>
            </div>
      </>
    )
}

export default CardContainer