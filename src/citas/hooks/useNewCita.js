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

  const handleNewAppointment = async (e) => {
    console.log(formState);
    e.preventDefault();
    var formdata = new FormData();
    formdata.append("namePatient", formState.namePatient);
    formdata.append("lastNamePatient", formState.lastNamePatient);
    formdata.append("emailPatient", formState.emailPatient);
    formdata.append("phonePatient", formState.phonePatient);
    formdata.append("descriptionPatient", formState.descriptionPatient);
    formdata.append("appointmentTime", `${formState.appointmentTime}:00`);
    formdata.append("statustAppointment", "false");
    formdata.append("dateAppointment", formState.dateAppointment);

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
