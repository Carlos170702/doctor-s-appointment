//icons
import { FiCheck, FiX } from 'react-icons/fi'
//css
import './css/Message.css'

export const Message = ({ message, status }) => {

    return (
        <div className="message">
            <div className='message__content login__message'>
                <ol>
                    {
                        status
                            ? <FiCheck className='message__icon success' />
                            : <FiX className='message__icon failed ' />
                    }
                    <li className={`${status ? 'success' : 'failed'}`} >{message?.error}</li>
                </ol>
            </div>
        </div>
    )
}
