import './CardProduct.css'

import React from 'react'

const CardProduct = ({producto, onClick}) => {
  return (
    <div className='producto' onClick={()=>onClick(producto)}>
        <h4>{producto.id}</h4>
          <picture>
              <img src={producto.imagen} alt="" />
          </picture>
          <p>{producto.title}</p>
    </div>
  )
}

export default CardProduct