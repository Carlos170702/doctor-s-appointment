import { useForm } from "../../hooks/useForm"

export const useLoginPage = () => {
    const { formState, onInputChange } = useForm({
        email: '',
        password: '',
    })

    return {
        ...formState,
        onInputChange,
    }
}
