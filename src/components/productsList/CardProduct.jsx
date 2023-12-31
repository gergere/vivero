import './CardProduct.css'


const CardProduct = ({producto, onClick}) => {
  return (
    <div className='producto' onClick={()=>onClick(producto)}>
      <h4>{producto.nombre.toUpperCase()}</h4>
      <h5>{producto.genero}</h5>
      <p>Precio: ${ producto.precio }</p>
          {/* <picture>
              <img src={producto.imagen} alt="" />
          </picture> */}
          <p>{producto.title}</p>
    </div>
  )
}

export default CardProduct