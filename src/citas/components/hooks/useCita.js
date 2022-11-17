import { useContext } from "react";
import { AuthContext } from "../../../context/authContext";

export const useCita = () => {
  const { confirmAppointment } = useContext(AuthContext);

  const confirmAppoint = async (id) => {
    await confirmAppointment(id);
  };

  return {
    confirmAppoint,
  };
};
