import { FiAlignJustify, FiX } from 'react-icons/fi'
import './css/NavBar.css'
import { useNavBar } from './hook/useNavBar'

export const NavBar = () => {
    const { active, handleMenu } = useNavBar()

    return (
        <div className='NavBar'>
            <div className="NavBar__Logo">
                <p>citas</p>
                {/* <img src="" alt="image logo" /> */}
            </div>
            <div className={`NavBar__enlaces ${active ? 'NavBar__enlaces--position' : ''}`}>
                <a href="#">citas</a>
                <a href="#">perfil</a>
                <a href="#">nueva cita</a>
            </div>
            {
                active
                    ? <FiX className='NavBar__hamburger' onClick={handleMenu} />
                    : <FiAlignJustify onClick={handleMenu} className='NavBar__hamburger' />
            }
        </div>
    )
}
