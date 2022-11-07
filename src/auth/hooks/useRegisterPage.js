import { useForm } from "../../hooks/useForm"

export const useRegisterPage = () => {
    const { formState, onInputChange } = useForm({
        name: '',
        last__name: '',
        email: '',
        password: '',
        number: '',
    })

    return {
        ...formState,
        onInputChange,
    }
}
