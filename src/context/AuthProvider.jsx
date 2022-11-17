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

    const login = () => {
        dispatch({
            type: types.login,
            payload: true
        })
    }

    const logout = () => {
        dispatch({
            type: types.logout,
            payload: false
        })
    }

    const getCitasPending = async () => {
        const response = await fetch("https://citasapi.onrender.com/users/list_appointment/1/", {
            method: "GET",
        });
        const data = await response.json()

        dispatch({
            type: types.citasPending,
            payload: data
        })
    }

    return (
        <AuthContext.Provider value={{ state, login, logout, getCitasPending }}>
            {children}
        </AuthContext.Provider>
    )
}
