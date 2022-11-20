//components
import { Cita } from '../components/Cita'
import { NewCita } from './NewCita'
import { NavBar } from '../../components/NavBar'
import { Loading } from '../../components/Loading'

//css
import '../css/CitaClient.css'

//hook
import { useCitaClient } from '../hooks/useCitaClient'

export const CitaClientPage = () => {
  const { activeNew, handleNewCita, citasClient } = useCitaClient();

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
          <div className="citas__countClient">
            {
              citasClient?.isLoading && <Loading />
            }
            {
              citasClient.data.length > 0
                ? citasClient?.data.map((item, index) => (
                  <div key={index} className='citasClient'>
                    <div className="citasClientImg">
                      <img src="https://i.pinimg.com/474x/92/c7/c7/92c7c750120016c44ec0b16837645c58.jpg" alt="image perfil" />
                    </div>
                    <div className="citasClient__data">
                      <h2>Mis datos</h2>
                      <div className="citasClient__inf">
                        <p>Nombre: <span>{`${item?.namePatient} ${item?.lastNamePatient}`}</span></p>
                        <p>Telefono: <span>{item?.phonePatient}</span></p>
                        <p>Dia: <span>{item?.dateAppointment}</span></p>
                        <p>Hora: <span>{item?.appointmentTime}</span></p>
                        <p>Correo: <span>{item?.emailPatient}</span></p>
                        <p>Status: <span>{!item.statustAppointment ? 'pendiente' : 'Completo'}</span></p>
                        <p className='citasClient__inf--description'>Descripcion: <span>{item?.descriptionPatient}</span></p>
                      </div>
                    </div>
                    <hr className='divition' />
                  </div>
                ))
                : <p className='citas__error'>No hay citas</p>
            }
          </div>
        </div>
      </div>
    </>
  )
}
