import { useState } from "react";
import { useNewCita } from "./useNewCita";

export const useCitaClient = () => {
  const [activeNew, setActiveNew] = useState(false);

  const handleNewCita = () => {
    setActiveNew(!activeNew)
  };

  return {
    //variables
    activeNew,
    //metodos
    handleNewCita,
  };
};
