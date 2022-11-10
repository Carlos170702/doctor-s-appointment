import { Route, Routes } from "react-router-dom"
import { CitaClientPage } from "../pages/CitaClientPage"
import { CitasPage } from "../pages/CitasPendientesPage"
import { NewCita } from "../pages/NewCita"

export const CitasRouter = () => {
    return (
        <Routes>

            <Route path="Client" element={<CitaClientPage />} />
            <Route path="pending" element={<CitasPage />} />
            <Route path="new" element={<NewCita />} />

        </Routes>
    )
}
