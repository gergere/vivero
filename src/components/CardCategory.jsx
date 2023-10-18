import './CardCategory.css'


const CardCategory = ({category, img}) => {
  return (
    <div style={{ backgroundImage: `url(${img})` }}>
        <h4>{category}</h4>
    </div>
  )
}

export default CardCategory