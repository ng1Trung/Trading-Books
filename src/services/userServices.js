import axios from 'axios'
const request = axios.create({
    baseURL: 'http://localhost:8080/api/',
})

const post = async (path, options = {}) => {
    const response = await request.post(path, options)
    return response.data
}
const handleLoginApi = async (email, password) => {
    return await post('login', { email, password })
        .then(function (response) {
            return response
        })
        .catch(function (error) {
            return error.response.data.errorMessage
        })
}

export { handleLoginApi }
