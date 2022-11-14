import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { useFetch } from "../../hooks/useFetch";
import { useForm } from "../../hooks/useForm";

export const useLoginPage = () => {
  const navigate = useNavigate();
  const { formState, onInputChange } = useForm({
    email: "",
    password: "",
  });
  const { data, hasError, isLoading, message, getfetch } = useFetch();

  //metodo de login
  const handleLogin = async (e) => {
    e.preventDefault();

    var formdata = new FormData();
    formdata.append("email", formState?.email);
    formdata.append("password", formState?.password);

    var requestOptions = {
      method: "POST",
      body: formdata,
    };

    const response = await getfetch(
      "https://citasapi.onrender.com/users/login/",
      requestOptions
    );

    if (response?.Status) {
      localStorage.setItem("user", JSON.stringify(response.Data));
      setTimeout(() => {
        navigate("/client", { replace: true });
      }, 2000);
    }
  };

  return {
    data,
    isLoading,
    ...formState,
    message,
    onInputChange,
    handleLogin,
  };
};
