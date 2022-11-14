import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/authContext"

export const PublicRoutes = ({ children }) => {
    const { state } = useContext(AuthContext)
    const navigate = useNavigate();

    useEffect(() => {
        state.logged === true && navigate('/client', { replace: true })
        return
    }, [])


    return children
}
