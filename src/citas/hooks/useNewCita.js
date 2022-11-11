import { useState } from "react"

export const useNewCita = () => {
  const [active, setActive] = useState(true)

  const handleActive = () => {
    setActive(!active)
  }
  
  return {
    //variables
    active,

    //functions
    handleActive
  }
}
