import { useFetch } from "../../hooks/useFetch";
import { useForm } from "../../hooks/useForm"

export const useRegisterPage = () => {
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

        var formdata = new FormData();
        formdata.append("username", formState?.name);
        formdata.append("lastname", formState?.last__name);
        formdata.append("rol", 'client');
        formdata.append("phone", formState?.number);
        formdata.append("email", formState?.email);
        formdata.append("password", formState?.password);

        // {
        //   "username":"carlos",
        //   "lastname":"perez",
        //   "rol":"client",
        //   "phone":"269346",
        //   "email":"prueba2@gmail.com",
        //   "password":"123456"
        //   }

        var requestOptions = {
            method: "POST",
            body: formdata,
        };

        const response = await getfetch(
            "https://citasapi.onrender.com/users/register/",
            requestOptions
        );

        console.log(response)

        if (response?.Status) {
            login();
            localStorage.setItem("user", JSON.stringify(response.Data));
            setTimeout(() => {
                navigate("/client", { replace: true });
            }, 2000);
        }
    }

    return {
        ...formState,
        onInputChange,
        handleRegister
    }
}
