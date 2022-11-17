//assets
import image from './logo.png'

//icon
import { FiAlignJustify, FiX } from 'react-icons/fi'

//hook
import { useNavBar } from './hook/useNavBar'

//css
import './css/NavBar.css'

import { Link } from 'react-router-dom'

export const NavBar = () => {
    const { active, rol, handleMenu, handleLogout } = useNavBar()

    return (
        <nav className='NavBar'>
            <div className="NavBar__Logo">
                <img src={image} alt="image logo" />
            </div>
            <div className={`NavBar__enlaces ${active ? 'NavBar__enlaces--position' : ''}`}>
                {rol === 'client' && <Link to={'/client'}>citas</Link>}
                {rol === 'client' && <Link to={'/pending'}>pendientes</Link>}
                {rol === 'client' && <Link to={'/Profile'}>perfil</Link>}
                <button
                    onClick={handleLogout}
                    className='NavBar__logout'
                >
                    Cerrar seccion
                </button>
            </div>
            {
                active
                    ? <FiX className='NavBar__hamburger' onClick={handleMenu} />
                    : <FiAlignJustify onClick={handleMenu} className='NavBar__hamburger' />
            }
        </nav>
    )
}
