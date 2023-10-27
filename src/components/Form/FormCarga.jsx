import { Link } from 'react-router-dom';
import './FormCarga.css'

const FormCarga = () => {

    return (

        <div>
            <h1>CARGA DE DATOS</h1>

            <div id='contenedorPrincipalCarga'>

                <Link id='contenedorPlantas' to="/formCarga/planta">
                    <div>
                        <h4>Plantas/Semillas</h4>
                    </div>
                </Link>

                <Link id='contenedorProductos' to='/formCarga/producto'>
                    <div>
                        <h4>Productos</h4>
                    </div>
                </Link>

            </div>
        </div>


    )

}

export default FormCarga;