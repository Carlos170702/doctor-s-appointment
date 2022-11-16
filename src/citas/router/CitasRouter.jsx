import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "../../components/NavBar"
import { CitaClientPage } from "../pages/CitaClientPage"
import { CitasPage } from "../pages/CitasPendientesPage"
import { Profile } from "../pages/Profile"

export const CitasRouter = () => {
    return (
        <Routes>

            <Route path="/Client" element={<CitaClientPage />} />
            <Route path="/pending" element={<CitasPage />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/*" element={<Navigate to="/login" />} />

        </Routes>
    )
}
