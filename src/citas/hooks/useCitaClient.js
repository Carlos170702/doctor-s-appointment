import { useEffect, useState } from "react";

export const useCitaClient = () => {
  const [activeNew, setActiveNew] = useState(false);
  const [citasClient, setCitasClient] = useState({
    isLoading: false,
    isError: {},
    data: [],
  });

  const handleNewCita = () => {
    setActiveNew(!activeNew);
  };

  useEffect(() => {
    (async () => {
      setCitasClient({
        isLoading: true,
        isError: {},
        data: [],
      });
      const headersList = {
        Accept: "*/*",
        "Content-Type": "application/json",
      };

      const bodyContent = JSON.stringify({
        email: JSON.parse(localStorage.getItem("user")).email,
      });

      const response = await fetch(
        "https://citasapi.onrender.com/appointment/appointmentUser/0",
        {
          method: "POST",
          body: bodyContent,
          headers: headersList,
        }
      );

      const data = await response.json();
      data.Status &&
        setTimeout(() => {
          setCitasClient({
            isLoading: false,
            isError: {},
            data: data.Appointment,
          });
        }, 1000);
    })();
  }, []);

  return {
    //variables
    activeNew,
    citasClient,
    //metodos
    handleNewCita,
  };
};
