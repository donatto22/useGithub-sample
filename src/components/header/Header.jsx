import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
    <div id="nav">
        <div id="logo">
            <h3>Logo</h3>
        </div>

        <div id="links">
            <ul>
                <li> <Link to='/'>Inicio</Link> </li>
                <li> <Link to='/nosotros'>Nosotros</Link> </li>
            </ul>
        </div>
    </div>
  )
}

export default Header