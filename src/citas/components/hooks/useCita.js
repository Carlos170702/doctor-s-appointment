import { useContext } from "react";
import { AuthContext } from "../../../context/authContext";

export const useCita = () => {
  const { confirmAppointment } = useContext(AuthContext);

  const confirmAppoint = async (id) => {
    // const formdata = new FormData();
    // formdata.append("statustAppointment", "true");
    // const requestOptions = {
    //   method: "POST",
    //   body: formdata,
    //   redirect: "follow",
    // };
    // const response = await fetch(
    //   `https://citasapi.onrender.com/users/finish_appointment/${id}/`,
    //   requestOptions
    // );
    // const data = await response.json();
    await confirmAppointment(id);
  };

  return {
    confirmAppoint,
  };
};
