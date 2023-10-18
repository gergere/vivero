import logo from '../assets/logo.png'
import './Footer.css'

const Footer = () => {
  return (
    <div id='footer'>
        <img className='logo' src={logo} />
        <h4>Desarrollado por</h4>
        <h4>Valen, Mati, Lucas, Ale, Tomy y Germán</h4>
    </div>
  )
}

export default Footer