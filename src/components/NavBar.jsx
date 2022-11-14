//assets
import image from './logo.png'

//icon
import { FiAlignJustify, FiX } from 'react-icons/fi'

//hook
import { useNavBar } from './hook/useNavBar'

//css
import './css/NavBar.css'

export const NavBar = () => {
    const { active, handleMenu } = useNavBar()

    return (
        <nav className='NavBar'>
            <div className="NavBar__Logo">
                <img src={image} alt="image logo" />
            </div>
            <div className={`NavBar__enlaces ${active ? 'NavBar__enlaces--position' : ''}`}>
                <a href="#">citas</a>
                <a href="#">perfil</a>
                <a href="#">nueva cita</a>
                <button
                    className='NavBar__logout'
                >Cerrar seccion</button>
            </div>
            {
                active
                    ? <FiX className='NavBar__hamburger' onClick={handleMenu} />
                    : <FiAlignJustify onClick={handleMenu} className='NavBar__hamburger' />
            }
        </nav>
    )
}
