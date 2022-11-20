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

            {
                JSON.parse(localStorage.getItem('user')).rol === 'admin'
                    ? <div className="citas">
                        <div className="citas__content" >
                            <h2 className="citas__pendientes">Citas Pendientes</h2>
                            <div className="citas__count">
                                {
                                    state?.citasPending?.appointmentsNoFinish.length > 0
                                        ? state?.citasPending?.appointmentsNoFinish?.map((item, index) => (
                                            <Cita key={index} data={item} />
                                        ))
                                        : <p className="citas__empty">No hay citas pendientes</p>
                                }
                            </div>
                        </div>
                    </div>
                    : <h2 className="Error_404">Error 404 usuario no valido</h2>
            }
        </>
    )
}
