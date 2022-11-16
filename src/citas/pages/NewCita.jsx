//others
import { Formik } from 'formik';

//icons 
import { FiX } from 'react-icons/fi'

//hook
import { useNewCita } from '../hooks/useNewCita'

//components
import { Message } from '../../components/Message';
import { Loading } from '../../components/Loading';

//css
import '../css/NewCita.css'

export const NewCita = ({ handleNewCita }) => {
    const { data, isLoading, message, formState, handleNewAppointment, onInputChange } = useNewCita();
    // const { namePatient, lastNamePatient, emailPatient, phonePatient, descriptionPatient, appointmentTime, dateAppointment } = formState

    return (
        <>
            {
                isLoading && <Loading />
            }
            <div className='newCita animate__animated animate animate__backInLeft'>
                <FiX className='newCita__icon' onClick={handleNewCita} />
                <div className="newCita__content" >
                    <h2 className="citas__pendientes">Nueva cita</h2>

                    <Formik

                        initialValues={{
                            name: '',
                            lastname: '',
                            email: JSON.parse(localStorage.getItem('user')).email,
                            phone: '',
                            date: '',
                            time: '',
                            description: '',
                        }}

                        validate={(values) => {
                            let errors = {};
                            //name
                            if (!values.name) {
                                errors.nombre = 'Dijita tu nombre '
                            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name))
                                errors.nombre = 'El nombre solo puede contener letras y espacios'
                            //lastname
                            if (!values.lastname) {
                                errors.lastname = 'Eijita tu apellido '
                            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.lastname))
                                errors.lastname = 'El apellido solo puede contener letras y espacios'
                            //email
                            if (!values.email) {
                                errors.email = 'Dijita tu correo '
                            } else if (!/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(values.email))
                                errors.email = 'Dijita un correo valido'
                            //phone
                            if (!values.phone) {
                                errors.phone = 'Dijita tu numero de telefono '
                            }
                            //date
                            if (!values.date) {
                                errors.date = 'Debes elegir una fecha '
                            }
                            //time
                            if (!values.time) {
                                errors.time = 'Debes elegir una hora '
                            }
                            //descrption
                            if (!values.description) {
                                errors.description = 'Dijita una breve descipcion de los sintomas'
                            }

                            return errors;
                        }}

                        onSubmit={() => {
                            console.log("formilario enviado");
                        }}
                    >
                        {
                            ({ handleSubmit, handleChange, handleBlur, touched, values, errors }) => (
                                <form className="newCita__form" onSubmit={handleSubmit}>
                                    <div className="newCita__data">
                                        <label>Nombre:</label>
                                        <input
                                            type="text"
                                            name='name'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder='Escribe tu nombre'
                                            value={values.name}
                                        />
                                        {touched && errors.nombre && <p>{errors.nombre}</p>}
                                    </div>

                                    <div className="newCita__data">
                                        <label>Apellido:</label>
                                        <input
                                            type="text"
                                            name='lastname'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder='Escribe tu apellido'
                                            value={values.lastname}
                                        />
                                        {touched.lastname && errors.lastname && <p>{errors.lastname}</p>}
                                    </div>

                                    <div className="newCita__data">
                                        <label>email:</label>
                                        <input
                                            type="email"
                                            name='email'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder='Dijita tu email'
                                            value={values.email}
                                        />
                                        {touched.email && errors.email && <p>{errors.email}</p>}
                                    </div>

                                    <div className="newCita__data">
                                        <label>Numero de telefono:</label>
                                        <input
                                            type="number"
                                            name='phone'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder='Dijita tu numero de telefono'
                                            value={values.phone}
                                        />
                                        {touched.phone && errors.phone && <p>{errors.phone}</p>}
                                    </div>
                                    <div className='newCita__date'>
                                        <div className="newCita__data newCita__data--day">
                                            <label>Elige el dia</label>
                                            <input
                                                type="date"
                                                name='date'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.date}
                                            />
                                            {touched && errors.date && <p>{errors.date}</p>}
                                        </div>
                                        <div className="newCita__data newCita__data--time">
                                            <label>Elige la hora</label>
                                            <input
                                                type="time"
                                                name='time'
                                                list="listalimitestiempo"
                                                min={9}
                                                max={16}
                                                step="600"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.time}
                                            />
                                            {touched && errors.time && <p>{errors.time}</p>}
                                        </div>
                                        <datalist id="listalimitestiempo">
                                            <option value="08:00"></option>
                                            <option value="09:00"></option>
                                            <option value="10:00"></option>
                                            <option value="03:00"></option>
                                        </datalist>
                                    </div>
                                    <div className="newCita__data">
                                        <label>Descripción de los sintomas:</label>
                                        <textarea
                                            name="description"
                                            id="descriptio"
                                            placeholder='Escribe una breve descripción'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.description}
                                        />
                                        {touched && errors.description && <p>{errors.description}</p>}
                                    </div>
                                    {
                                        message.status && <Message status={data?.Status} message={message} className='login__message' />
                                    }
                                    <div className="citas__options" >
                                        <button
                                            type='submit'
                                            className="citas__opcion citas__opcion--background"
                                            onClick={(e) => handleNewAppointment(e, values)}
                                        >Hacer cita</button>
                                    </div>
                                </form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        </>
    )
}
