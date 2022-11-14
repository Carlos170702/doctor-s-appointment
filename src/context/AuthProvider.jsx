import { useReducer } from "react"
import { types } from "../types/types"
import { AuthContext } from "./authContext"
import { authReducer } from "./authReducer"

const init = () => {
    const user = JSON.parse(localStorage.getItem('user'))

    return {
        logged: !!user,
    }
}

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {}, init)

    return (
        <AuthContext.Provider value={{ state }}>
            {children}
        </AuthContext.Provider>
    )
}
