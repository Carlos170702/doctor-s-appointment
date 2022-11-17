//components
import { NavBar } from "../../components/NavBar"
import { Cita } from "../components/Cita"
//hook
import { useCitasPendientesPage } from "../hooks/useCitasPendientesPage"
//css
import '../css/CitasPendientesPage.css'

export const CitasPage = () => {
    const { state } = useCitasPendientesPage();
    
    return (
        <>
            <NavBar />
            <div className="citas">
                <div className="citas__content" >
                    <h2 className="citas__pendientes">Citas Pendientes</h2>
                    <div className="citas__count">
                        {
                            state?.citasPending?.appointmentsNoFinish?.map((item, index) => (
                                <Cita key={index} data={item} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
