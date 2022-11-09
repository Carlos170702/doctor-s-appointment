//components
import { NavBar } from "../../components/NavBar"
import { Cita } from "../components/Cita"
//hook
import { useCitasPendientesPage } from "../hooks/useCitasPendientesPage"
//css
import '../css/CitasPendientesPage.css'

export const CitasPage = () => {
    const { } = useCitasPendientesPage()
    return (
        <>
            <NavBar />
            <div className="citas">
                <div className="citas__content" >
                    <h2 className="citas__pendientes">Citas Pendientes</h2>
                    <div className="citas__count">
                        {
                            [1, 2, 3, 4, 5].map((item, index) => (
                                <Cita key={index} />
                            ))
                        }
                    </div>
                </div>
                <div className="citas__options">
                    <button className="citas__opcion citas__opcion--background">Confirmar cita</button>
                    <button className="citas__opcion citas__opcion--background">Cancelar cita</button>
                    <button className="citas__opcion citas__opcion--background">Actualizar cita</button>
                </div>
            </div>
        </>
    )
}
