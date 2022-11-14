//components
import { Loading } from '../../components/Loading'
import { Message } from '../../components/Message'

// react-router
import { Link } from 'react-router-dom'

//assets
import image from '../../components/logo.png'

//icons
import { FiLogIn } from 'react-icons/fi'

//hooks
import { useLoginPage } from '../hooks/useLoginPage'

//css
import '../css/loginPage.css'

export const LoginPage = () => {
    const { data, email, password, isLoading, message, onInputChange, handleLogin } = useLoginPage();

    return (
        <>
            {
                isLoading && <Loading />
            }
            <div className="login">
                <div className="login__content">
                    <div className="login__Page">
                        <div className="login__logo">
                            <img src={image} alt="imagen logo" />
                        </div>
                        <div className="login__tiitle">
                            <h1>Login</h1>
                        </div>
                    </div>

                    <form className="login__form">
                        <div className="login__data">
                            <label className='login__data__label'>Correo:</label>
                            <input
                                required
                                type="text"
                                className='login__data__getInf'
                                name='email'
                                placeholder='Correo'
                                onChange={onInputChange}
                                value={email}
                                autoComplete={email}
                            />
                        </div>
                        <div className="login__data">
                            <label className='login__data__label'>contraseña:</label>
                            <input
                                required
                                type="password"
                                className='login__data__getInf'
                                name='password'
                                placeholder='Password'
                                onChange={onInputChange}
                                value={password}
                                autoComplete={password}
                            />
                        </div>
                        {
                            message.status && <Message status={data?.Status} message={message} className='login__message' />
                        }
                        <div className="login__data">
                            <button
                                type='submit'
                                className='login__data__enviar'
                                onClick={handleLogin}
                            >
                                Entrar
                                <FiLogIn className='login__data__login' />
                            </button>
                        </div>

                        <div className='login__others'>
                            <div className="login__other">
                                <label className='login__data__label'>No tienes cuenta? </label>
                                <Link to={'/register'} className='login__data__forgotPassword'>Crear cuenta</Link>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}


