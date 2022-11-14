import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { useForm } from "../../hooks/useForm"

export const useRegisterPage = () => {
    const navigate = useNavigate()
    // const [message, setMessage] = useState({
    //     message: {
    //         status: false,
    //         error: "",
    //     },
    // })
    const { formState, onInputChange } = useForm({
        name: '',
        last__name: '',
        email: '',
        password: '',
        number: '',
    })
    const { data, hasError, isLoading, message, getfetch } = useFetch();

    const handleRegister = async (e) => {
        e.preventDefault();

        const formdata = new FormData();
        formdata.append("username", formState?.name);
        formdata.append("lastname", formState?.last__name);
        formdata.append("rol", 'client');
        formdata.append("phone", formState?.number);
        formdata.append("email", formState?.email);
        formdata.append("password", formState?.password);
        const requestOptions = {
            method: "POST",
            body: formdata,
        };

        const response = await getfetch(
            "https://citasapi.onrender.com/users/register/",
            requestOptions
        );

        console.log(response);
        if (response?.Status) {
            localStorage.setItem("user", JSON.stringify(response.Data));
            setTimeout(() => {
                navigate("/login", { replace: true });
            }, 2000);
            return
        }
    }

    return {
        data,
        isLoading,
        message,
        ...formState,
        onInputChange,
        handleRegister
    }
}
