import './CardCategory.css'


const CardCategory = ({category, img}) => {
  return (
    <div className="fondo"  style={{ backgroundImage: `url(./src/assets/categorias/${img}.jpg)` }} >

        <h4>{category}</h4>
    </div>
  )
}

export default CardCategory