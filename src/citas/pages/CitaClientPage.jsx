//components
import { Cita } from '../components/Cita'
import { NewCita } from './NewCita'

//css
import '../css/CitaClient.css'

//hook
import { useCitaClient } from '../hooks/useCitaClient'
import { NavBar } from '../../components/NavBar'
import { AuthContext } from '../../context/authContext'
import { useContext } from 'react'

export const CitaClientPage = () => {
  const { activeNew, handleNewCita } = useCitaClient()

  return (
    <>
      <NavBar />
      {
        activeNew && <NewCita handleNewCita={handleNewCita} />
      }
      <div className="citas">
        <div className="citas__content" >
          <div className='citas__content__tittle__button'>
            <h2 className="citas__tittle">Citas</h2>
            <button className="citas__opcion citas__opcion--confirm" onClick={handleNewCita}>Nueva cita</button>
          </div>
          <div className="citas__count">
            <Cita />
            <Cita />
          </div>
        </div>
      </div>
    </>
  )
}
