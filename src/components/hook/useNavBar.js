import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

export const useNavBar = () => {
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
    //funciones
    handleMenu,
    handleLogout
  }
}
