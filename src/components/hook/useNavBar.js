import { useState } from "react"

export const useNavBar = () => {
    const [active, setActive] = useState(false)
    
  return {
    active
  }
}
