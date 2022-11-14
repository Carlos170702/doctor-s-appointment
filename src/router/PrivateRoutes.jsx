import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/authContext"

export const PrivateRoutes = ({ children }) => {
    const navigate = useNavigate()
    const { state } = useContext(AuthContext)

    useEffect(() => {
        !state.logged && navigate('/login'.replace, { replace: true })
        return
    }, [])

    return children
}
