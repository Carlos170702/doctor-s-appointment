//icons 
import { FiX } from 'react-icons/fi'

//hook
import { useNewCita } from '../hooks/useNewCita'

//css
import '../css/NewCita.css'
import { Loading } from '../../components/Loading';
import { Message } from '../../components/Message';

export const NewCita = ({ handleNewCita }) => {
    const { data, isLoading, message, formState, handleNewAppointment, onInputChange } = useNewCita();
    const { namePatient, lastNamePatient, emailPatient, phonePatient, descriptionPatient, appointmentTime, dateAppointment } = formState
    
    return (
        <>
            {
                isLoading && <Loading />
            }
            <div className='newCita animate__animated animate animate__backInLeft'>
                <FiX className='newCita__icon' onClick={handleNewCita} />
                <div className="newCita__content" >
                    <h2 className="citas__pendientes">Nueva cita</h2>
                    <form className="newCita__form">
                        <div className="newCita__data">
                            <label>Nombre:</label>
                            <input
                                type="text"
                                name='namePatient'
                                onChange={onInputChange}
                                placeholder='Escribe tu nombre'
                                value={namePatient}
                            />
                        </div>
                        <div className="newCita__data">
                            <label>Apellido:</label>
                            <input
                                type="text"
                                name='lastNamePatient'
                                onChange={onInputChange}
                                placeholder='Escribe tu apellido'
                                value={lastNamePatient}
                            />
                        </div>
                        <div className="newCita__data">
                            <label>email:</label>
                            <input
                                type="email"
                                name='emailPatient'
                                onChange={onInputChange}
                                placeholder='Dijita tu email'
                                value={emailPatient}
                            />
                        </div>
                        <div className="newCita__data">
                            <label>Numero de telefono:</label>
                            <input
                                type="number"
                                name='phonePatient'
                                onChange={onInputChange}
                                placeholder='Dijita tu numero de telefono'
                                value={phonePatient}
                            />
                        </div>
                        <div className='newCita__date'>
                            <div className="newCita__data newCita__data--day">
                                <label>Elige el dia</label>
                                <input
                                    type="date"
                                    name='dateAppointment'
                                    onChange={onInputChange}
                                    value={dateAppointment}
                                />
                            </div>
                            <div className="newCita__data newCita__data--time">
                                <label>Elige la hora</label>
                                <input
                                    type="time"
                                    name='appointmentTime'
                                    list="listalimitestiempo"
                                    step="600"
                                    onChange={onInputChange}
                                    value={appointmentTime}
                                />
                                <datalist id="listalimitestiempo">
                                    <option value="08:00"></option>
                                    <option value="09:00"></option>
                                    <option value="10:00"></option>
                                    <option value="03:00"></option>
                                </datalist>
                            </div>
                        </div>
                        <div className="newCita__data">
                            <label>Descripción de los sintomas:</label>
                            <textarea
                                name="descriptionPatient"
                                id="descriptio"
                                placeholder='Escribe una breve descripción'
                                onChange={onInputChange}
                                value={descriptionPatient}
                            />
                        </div>
                        {
                            message.status && <Message status={data?.Status} message={message} className='login__message' /> 
                        }
                        <div className="citas__options" >
                            <button
                                className="citas__opcion citas__opcion--background"
                                onClick={handleNewAppointment}
                            >Hacer cita</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
