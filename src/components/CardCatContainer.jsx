import CardCategory from './cardCategory'
import fotoPlanta from '../assets/fotoPlanta.jpg'
import { Link } from 'react-router-dom'
import './CardCatContainer.css'

const CardCatContainer = () => {
    const cat = ['Plantas', 'Semillas', 'Herramientas', 'Macetas', 'Accesorios']
    let i = -1
    return (
        <>
            {cat.map(categ => {
                i++
                return (
                    <Link key={i} to={`productos/${categ.toLowerCase()}`} >
                        <CardCategory key={i} category={categ} img={fotoPlanta} />
                    </Link >
                )
            })}
        </>
    )
}

export default CardCatContainer