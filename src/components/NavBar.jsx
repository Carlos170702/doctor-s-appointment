import { FiAlignJustify } from 'react-icons/fi'
import './css/NavBar.css'
import { useNavBar, FiX } from './hook/useNavBar'

export const NavBar = () => {
    const { active } = useNavBar()

    return (
        <div className='NavBar'>
            <div className="NavBar__Logo">
                <img src="https://scontent.ftgz3-1.fna.fbcdn.net/v/t1.6435-9/61651298_1300542670094267_6370983487058477056_n.png?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=BKkWOtya3fkAX-4ywoK&_nc_ht=scontent.ftgz3-1.fna&oh=00_AfCC_JBVLDKi1PAAZwLhLa7Q-p-XzrDY_EKqjTVbMJai3w&oe=638CB24E" alt="image logo" />
            </div>
            {
                active ? <FiX /> : <FiAlignJustify className='NavBar__hamburger' />
            }
        </div>
    )
}
