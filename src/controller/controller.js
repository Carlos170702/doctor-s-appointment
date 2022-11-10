const { default: axios } = require("axios")

const getUser = async() =>{
    const data = await axios.request(options)
    
    return data
}