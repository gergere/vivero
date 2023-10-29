import CardCategory from './cardCategory'
import { Link } from 'react-router-dom'
import './CardCatContainer.css'

const CardCatContainer = () => {
    const cat = ['Plantas', 'Semillas', 'Herramientas', 'Macetas', 'Accesorios'];
    let i = -1;
    return (
        <div className="productos-container">
            {cat.map(categ => {
                i++;
                return (
                    <Link key={i} to={`productos/${categ.toLowerCase()}`} >
                        <div className="caja">
                        <CardCategory key={i} category={categ} img={categ.toLowerCase()} />
                        </div>
                    </Link >
                );
            })}
        </div>
    );
}

export default CardCatContainer;

