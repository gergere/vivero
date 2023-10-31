import { useNavigate } from 'react-router-dom'
import './CardProduct.css'

import React from 'react'

const CardProduct = ({producto, onClick}) => {

  const handleURL = (id) => {

    // verifica si es planta o producto, ya que planta tiene la propiedad genero
    if(producto.genero && producto.genero != "") {
      useNavigate(`formCarga/planta/${id}`)
    } else {
      useNavigate(`formCarga/producto/${id}`)
    }
  }

  return (
    <div className='producto' onClick={()=>onClick(producto)}>
        <h4>{producto.id}</h4>
          <picture>
              <img src={producto.imagen} alt="" />
          </picture>
          <p>{producto.title}</p>
          <button onClick={handleURL} >Modificar</button>
          <button>Modificar</button>
    </div>
  )
}

export default CardProduct