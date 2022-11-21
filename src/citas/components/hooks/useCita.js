import { useContext } from "react";
import { AuthContext } from "../../../context/authContext";

export const useCita = () => {
  const { confirmAppointment, deleteAppointment } = useContext(AuthContext);

  const confirmAppoint = async (id) => {
    await confirmAppointment(id);
  };

<<<<<<< HEAD
  const deleteAppoint = async(id) =>{
    await deleteAppointment(id)
=======
  const deleteAppoint = async (id) => {
    await deleteAppointment(id);
>>>>>>> 3e1f04810eb848736a4e8e679e89617d6057399e
  }

  return {
    confirmAppoint,
<<<<<<< HEAD
    deleteAppoint
=======
    deleteAppoint,
>>>>>>> 3e1f04810eb848736a4e8e679e89617d6057399e
  };
};
