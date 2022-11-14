import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/authContext"

export const PublicRoutes = ({ children }) => {
    const { state } = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        state.logged && navigate('/client', { replace: true })
        return
    }, [])


    return children
}
