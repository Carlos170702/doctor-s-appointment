//icons 
import { FiX } from 'react-icons/fi'

//hook
import { useNewCita } from '../hooks/useNewCita'

//css
import '../css/NewCita.css'

export const NewCita = ({ handleNewCita }) => {
    const { } = useNewCita();

    return (
        <>
            <div className='newCita'>
                <FiX className='newCita__icon' onClick={handleNewCita} />
                <div className="newCita__content" >
                    <h2 className="citas__pendientes">Nueva cita</h2>
                    <form className="newCita__form">
                        <div className="newCita__data">
                            <label>Nombre:</label>
                            <input type="text" />
                        </div>
                        <div className="newCita__data">
                            <label>Fecha - hora:</label>
                            <div className="dropdown">
                                <p>Seleccione la fecha</p>
                                <div className="dropdown-content">
                                    <label>2022-12-12  /  05:23:32</label>
                                    <label>2022-12-12  /  05:23:32</label>
                                    <label>2022-12-12  /  05:23:32</label>
                                </div>
                            </div>
                        </div>
                        <div className="newCita__data">
                            <label>Concepto:</label>
                            <input type="text" />
                        </div>
                        <div className="newCita__data">
                            <label>Descripción de los sintomas:</label>
                            <textarea name="descriptio" id="descriptio" />
                        </div>
                        <div className="citas__options" >
                            <button className="citas__opcion citas__opcion--background">Hacer cita</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
