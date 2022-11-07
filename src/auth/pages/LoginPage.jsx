import { FiLogIn } from 'react-icons/fi'

//hooks
import { useLoginPage } from '../hooks/useLoginPage'

//css
import '../css/loginPage.css'

export const LoginPage = () => {
    const { email, password, onInputChange } = useLoginPage()
    return (
        <>
            <div className="login">
                <div className="login__content">
                    <div className="login__Page">
                        <div className="login__logo">
                            {/* <img src="" alt="" /> */}
                        </div>
                        <div className="login__tiitle">
                            <h1>Login</h1>
                        </div>
                    </div>

                    <form className="login__form">
                        <div className="login__data">
                            <label className='login__data__label'>Correo:</label>
                            <input
                                type="text"
                                className='login__data__getInf'
                                name='email'
                                placeholder='Correo'
                                onChange={onInputChange}
                                value={email}
                            />
                        </div>
                        <div className="login__data">
                            <label className='login__data__label'>contraseña:</label>
                            <input
                                type="password"
                                className='login__data__getInf'
                                name='password'
                                placeholder='Password'
                                onChange={onInputChange}
                                value={password}
                            />
                        </div>
                        <div className="login__data">
                            <button type='submit' className='login__data__enviar'>
                                Entrar
                                <FiLogIn className='login__data__login' />
                            </button>
                        </div>

                        <div className='login__others'>
                            <div className="login__other">
                                <label className='login__data__label'>Olvidaste tu contraseña? </label>
                                <a href="#" className='login__data__forgotPassword'>recupar contraseña</a>
                            </div>
                            <div className="login__other">
                                <label className='login__data__label'>No tienes cuenta? </label>
                                <a href="#" className='login__data__forgotPassword'>Crear cuenta</a>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}
