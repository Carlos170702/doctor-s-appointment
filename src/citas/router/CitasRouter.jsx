import { Navigate, Route, Routes } from "react-router-dom"
import { CitaClientPage } from "../pages/CitaClientPage"
import { CitasPage } from "../pages/CitasPendientesPage"

export const CitasRouter = () => {
    return (
        <Routes>

            <Route path="/Client" element={<CitaClientPage />} />
            <Route path="/pending" element={<CitasPage />} />
            <Route path="/*" element={<Navigate to="/client" />} />

        </Routes>
    )
}
