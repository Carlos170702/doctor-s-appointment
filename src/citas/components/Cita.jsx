//components
import { InfPerson } from './InfPerson'

//css
import './css/Cita.css'

//hook
import { useCita } from './hooks/useCita'

export const Cita = ({ data }) => {
    const { confirmAppoint, deleteAppoint } = useCita()

    return (
        <div className="cita animate__animated animate__fadeInDown">
            <div className='citas__data'>
                <div className="cita__img">
                    <img src="https://i.pinimg.com/474x/92/c7/c7/92c7c750120016c44ec0b16837645c58.jpg" alt="" />
                </div>
                <div className="cita__content">
                    {
                        [
                            { name: "id", info: data?.id },
                            { name: "Nombre", info: `${data?.namePatient}  ${data?.lastNamePatient}` },
                            { name: "Fecha", info: data?.dateAppointment },
                            { name: "Hora", info: data?.appointmentTime },
                            { name: "Descripción", info: data?.descriptionPatient }
                        ].map((item, index) => (
                            <InfPerson key={index} data={item} />
                        ))
                    }
                </div>
            </div>
            <div className="citas__options">
                <button
                    className="citas__opcion citas__opcion--confirm"
                    onClick={() => confirmAppoint(data.id)}
                >
                    Confirmar cita</button>
                <button
                    className="citas__opcion citas__opcion--cancel"
                    onClick={deleteAppoint(data.id)}
                >
                    Cancelar cita</button>
                {/* <button
                    className="citas__opcion citas__opcion--update"
                >
                    Actualizar</button> */}
            </div>
        </div>
    )
}
