import './NavList.css'
import { Link } from 'react-router-dom'

const NavList = ({className}) => {


    return (
        <nav className={className}>
            <ul>
                <li><Link to= {'/Shop'}>Tienda</Link></li>
                <li><Link>Suscripción</Link></li>
                <li><Link>Para empresas</Link></li>
                <li><Link>Sobre nosotros</Link></li>
                <li><Link>Contacto</Link></li>
            </ul>
        </nav>
    )
}

export default NavList