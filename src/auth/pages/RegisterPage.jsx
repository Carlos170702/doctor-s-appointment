import { useRegisterPage } from "../hooks/useRegisterPage"

//icons
import { FiLogOut } from "react-icons/fi"

//css
import '../css/registerPage.css'
import { Link } from "react-router-dom"
import { Message } from "../../components/Message"
import { Loading } from "../../components/Loading"

export const RegisterPage = () => {
  const { data, isLoading, message, name, last__name, email, password, number, onInputChange, handleRegister } = useRegisterPage()
  return (
    <>
      {
        isLoading && <Loading />
      }
      <div className="login">
        <div className="login__content">
          <div className="login__Page">
            <div className="login__logo">
              {/* <img src="" alt="" /> */}
            </div>
            <div className="login__tiitle">
              <h1>registro</h1>
            </div>
          </div>

          <form className="login__form">
            <div className="login__data">
              <label className='login__data__label'>nombre:</label>
              <input
                type="text"
                className='login__data__getInf'
                name='name'
                placeholder='Nombre'
                onChange={onInputChange}
                value={name}
              />
            </div>
            <div className="login__data">
              <label className='login__data__label'>apellido:</label>
              <input
                type="text"
                className='login__data__getInf'
                name='last__name'
                placeholder='Apellido'
                onChange={onInputChange}
                value={last__name}
              />
            </div>
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
              <label className='login__data__label'>Telefono:</label>
              <input
                type="number"
                className='login__data__getInf'
                name='number'
                placeholder='Number'
                onChange={onInputChange}
                value={number}
              />
            </div>
            {
              message?.status && < Message message={message} status={data.Status} />
            }

            <div className="login__data">
              <button
                type='submit'
                className='login__data__enviar'
                onClick={handleRegister}
              >
                Entrar
                <FiLogOut className='login__data__login' />
              </button>
            </div>

            <div className='login__others'>
              <div className="login__other">
                <label className='login__data__label'>Ya tiene cuenta? </label>
                <Link to={'/login'} className='login__data__forgotPassword'>Iniciar sesión</Link>
              </div>
            </div>

          </form>
        </div>
      </div>
    </>
  )
}
