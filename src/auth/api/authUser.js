import { getData } from "../../controller/controller";

export const login = async (datas) => {
    const options = {
        method: 'POST',
        url: 'http://citasapi.onrender.com/users/login/',
        data: { email: 'carlitos2@gmail.com', password: '123456' }
    };

    const data = await getData(options)

    console.log(data)

    return data;
}

