//components
import { Cita } from '../components/Cita'
import { NewCita } from './NewCita'

//css
import '../css/CitaClient.css'

//hook
import { useCitaClient } from '../hooks/useCitaClient'

export const CitaClientPage = () => {
  const { } = useCitaClient()

  return (
    <>
      <NewCita />
      <div className="citas">
        <div className="citas__content" >
          <div className='citas__content__tittle__button'>
            <h2 className="citas__tittle">Citas</h2>
            <button className="citas__opcion citas__opcion--background">Nueva cita</button>
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
