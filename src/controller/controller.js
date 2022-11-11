import axios from "axios"

export const getData = async(options) =>{
    const data = await axios.request(options)
    
    return data
}