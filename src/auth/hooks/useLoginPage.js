import axios from "axios";
import { useForm } from "../../hooks/useForm"
import { login } from "../api/authUser";

export const useLoginPage = () => {
    const { formState, onInputChange } = useForm({
        email: '',
        password: '',
    })

    const handleLogin = async (e) => {
        e.preventDefault();

        var formdata = new FormData();
        formdata.append("email", "carlitos2@gmail.com");
        formdata.append("password", "123456");

        var requestOptions = {
            method: 'POST',
            'mode': 'no-cors',
            'headers': {
                'Access-Control-Allow-Origin': '*',
            },
            body: formdata,
        };

        fetch("https://citasapi.onrender.com/users/login/", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

        // const response = await login({
        //     email: formState.email,
        //     password: formState.password
        // })
    }

    return {
        ...formState,
        onInputChange,
        handleLogin,
    }
}
