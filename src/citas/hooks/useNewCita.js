import { useFetch } from "../../hooks/useFetch";
import { useForm } from "../../hooks/useForm";
import { useCitaClient } from "./useCitaClient";

export const useNewCita = () => {
  const { handleNewCita } = useCitaClient()
  const { formState, onInputChange } = useForm({
    namePatient: '',
    lastNamePatient: '',
    emailPatient: JSON.parse(localStorage.getItem("user")).email,
    phonePatient: '',
    descriptionPatient: '',
    statustAppointment: 'false',
    dateAppointment: '',
    appointmentTime: ''
  })
  const { data, hasError, isLoading, message, getfetch } = useFetch();

  const handleNewAppointment = async (e, datos) => {
    e.preventDefault();
    console.log(datos);
    var formdata = new FormData();
    formdata.append("namePatient", datos?.name);
    formdata.append("lastNamePatient", datos?.lastname);
    formdata.append("emailPatient", datos?.email);
    formdata.append("phonePatient", datos?.phone);
    formdata.append("descriptionPatient", datos?.description);
    formdata.append("appointmentTime", datos.time);
    formdata.append("statustAppointment", "false");
    formdata.append("dateAppointment", datos?.date);

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    const data = await getfetch('https://citasapi.onrender.com/users/create_appointment/', requestOptions)

    data.Status && handleNewCita()
  }


  return {
    //variables
    data,
    hasError,
    isLoading,
    message,
    formState,
    //functions
    handleNewAppointment,
    onInputChange
  };
};
