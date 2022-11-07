//components
import { NavBar } from "../../components/NavBar"
import { Cita } from "../components/Cita"

//css
import '../css/CitasPage.css'

export const CitasPage = () => {
    return (
        <>
            <NavBar />
            <div className="citas">
                <div className="citas__content" >
                    <h2 className="citas__pendientes">citas</h2>
                    <div className="citas__count">
                        {
                            [1,2,3,4,5].map( (item, index) => (
                                <Cita key={index} />
                            )) 
                        }
                    </div>
                </div>
                <div className="citas__options">
                    <button className="citas__opcion">Nueva cita</button>
                    <button className="citas__opcion">Cancelar cita</button>
                    <button className="citas__opcion">Actualizar cita</button>
                    <button className="citas__opcion">Todas las citas</button>
                </div>
            </div>
        </>
    )
}
