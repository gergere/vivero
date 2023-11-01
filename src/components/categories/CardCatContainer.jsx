import CardCategory from './CardCategory'
import { Link } from 'react-router-dom'
import './CardCatContainer.css'

const CardCatContainer = () => {
    const cat = ['Plantas', 'Semillas', 'Macetas' , 'Herramientas', 'Accesorios'];
    let i = -1;
    return (
        <div className="productos-container">
            {cat.map(categ => {
                i++;
                if (i==2) {

                    return (
                        <Link key={i} to={`productos/${categ.toLowerCase()}`}   id='macetas'>
                            <div className="caja">
                            <CardCategory key={i} category={categ} img={categ.toLowerCase()} />
                            </div>
                        </Link >
                    );
                }else{
                    return (
                        <Link key={i} to={`productos/${categ.toLowerCase()}`} >
                            <div className="caja">
                            <CardCategory key={i} category={categ} img={categ.toLowerCase()} />
                            </div>
                        </Link >
                    );
                }
            })}
        </div>
    );
}

export default CardCatContainer;

