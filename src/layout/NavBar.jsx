import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import './NavBar.css'

const NavBar = () => {
    return (
        <div id='navbarDiv'>
            <Link to='/'>
                <img className='logo' src={logo} />
            </Link>
            <ul>
                <Link to='/productos/plantas'><li>Plantas</li></Link>
                <Link to='/productos/semillas'><li>Semillas</li></Link>
                <Link to='/productos/herramientas'><li>Herramientas</li></Link>
                <Link to='/productos/macetas'><li>Macetas</li></Link>
                <Link to='/productos/accesorios'><li>Accesorios</li></Link>
                <Link to='/formCarga'><li>Cargar Productos</li></Link>
            </ul>
        </div>
    )
}

export default NavBar