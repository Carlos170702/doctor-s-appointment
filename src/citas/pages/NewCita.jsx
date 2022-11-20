//others
import { Formik, Form, ErrorMessage, Field } from 'formik';

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
    const { data, isLoading, message, handleNewAppointment } = useNewCita();
    const date = new Date(Date.now()).toISOString().split("T")[0].split("-");

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
                            date: `${date[0]}-${date[1]}-${date[2]}`,
                            time: '',
                            description: '',
                        }}

                        validate={(values) => {
                            let errors = {};
                            //name
                            if (!values.name) {
                                errors.name = 'Dijita tu nombre '
                            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name))
                                errors.name = 'El nombre solo puede contener letras y espacios'
                            //lastname
                            if (!values.lastname) {
                                errors.lastname = 'Dijita tu apellido '
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

                        onSubmit={ async(values) => {
                            const error = await handleNewAppointment(values, handleNewCita)
                        }}
                    >
                        {
                            ({ errors }) => (
                                <Form className="newCita__form">
                                    <div className="newCita__data">
                                        <label>Nombre:</label>
                                        <Field
                                            type="text"
                                            name='name'
                                            placeholder='Escribe tu nombre'
                                        />
                                        <ErrorMessage name='name' component={() => (
                                            <p className='newCita__msgError' >{errors.name}</p>
                                        )} />
                                    </div>

                                    <div className="newCita__data">
                                        <label>Apellido:</label>
                                        <Field
                                            type="text"
                                            name='lastname'
                                            placeholder='Escribe tu apellido'
                                        />
                                        <ErrorMessage name='lastname' component={() => (
                                            <p className='newCita__msgError'>{errors.lastname}</p>
                                        )} />
                                    </div>
                                    <div className="newCita__data">
                                        <label>email:</label>
                                        <Field
                                            type="email"
                                            name='email'
                                            placeholder='Dijita tu email'
                                            readOnly
                                        />
                                        <ErrorMessage name='email' component={() => (
                                            <p className='newCita__msgError' >{errors.email}</p>
                                        )} />
                                    </div>

                                    <div className="newCita__data">
                                        <label>Numero de telefono:</label>
                                        <Field
                                            maxLength={10}
                                            type="tel"
                                            name='phone'
                                            placeholder='Dijita tu numero de telefono'
                                        />
                                        <ErrorMessage name='phone' component={() => (
                                            <p className='newCita__msgError' >{errors.phone}</p>
                                        )} />
                                    </div>
                                    <div className='newCita__date'>
                                        <div className="newCita__data newCita__data--day">
                                            <label>Elige el dia</label>
                                            <Field
                                                type="date"
                                                name='date'
                                            />
                                            <ErrorMessage name='date' component={() => (
                                                <p className='newCita__msgError' >{errors.date}</p>
                                            )} />
                                        </div>
                                        <div className="newCita__data newCita__data--time">
                                            <label>Elige la hora</label>
                                            <Field
                                                type="time"
                                                name='time'
                                                list="listalimitestiempo"
                                            />
                                            <ErrorMessage name='time' component={() => (
                                                <p className='newCita__msgError' >{errors.time}</p>
                                            )} />
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
                                        <Field
                                            as='textarea'
                                            name="description"
                                            id="descriptio"
                                            placeholder='Escribe una breve descripción'
                                        />
                                        <ErrorMessage name='description' component={() => (
                                            <p className='newCita__msgError'>{errors.description}</p>
                                        )} />
                                    </div>

                                    {
                                        message.status && <Message status={data?.Status} message={message} className='login__message' />
                                    }
                                    <div className="citas__options" >
                                        <button
                                            type='submit'
                                            className="citas__opcion citas__opcion--confirm"
                                        >Hacer cita</button>
                                    </div>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        </>
    )
}
