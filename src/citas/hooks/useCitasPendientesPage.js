import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/authContext";

export const useCitasPendientesPage = () => {
  const { getCitasPending, state } = useContext(AuthContext);

  useEffect(() => {
    (async () => {
      await getCitasPending();
    })();
  }, []);

  return {
    state,
  };
};
