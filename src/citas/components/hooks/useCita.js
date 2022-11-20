import { useContext } from "react";
import { AuthContext } from "../../../context/authContext";

export const useCita = () => {
  const { confirmAppointment, deleteAppointment } = useContext(AuthContext);

  const confirmAppoint = async (id) => {
    await confirmAppointment(id);
  };

  const deleteAppoint = async(id) =>{
    await deleteAppointment(id)
  }

  return {
    confirmAppoint,
    deleteAppoint
  };
};
