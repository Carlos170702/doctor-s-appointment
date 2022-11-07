import { useState } from "react"

export const useNavBar = () => {
    const [active, setActive] = useState(false)
    
    const handleMenu = () =>{
      setActive(!active)
    }

  return {
    handleMenu,
    active
  }
}
