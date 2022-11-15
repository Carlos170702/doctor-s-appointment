import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

export const useNavBar = () => {
  const [rol, setRol] = useState(JSON.parse(localStorage.getItem('user')).rol)
  const { state, logout } = useContext(AuthContext);
  const [active, setActive] = useState(false)
  const navigate = useNavigate();

  const handleMenu = () => {
    setActive(!active)
  }

  const handleLogout = () => {
    navigate('/login', { replace: true })
    localStorage.clear();
    logout();
  }

  return {
    //variables
    active,
    rol,
    //funciones
    handleMenu,
    handleLogout
  }
}
