import axios from 'axios'
const request = axios.create({
    baseURL: 'http://localhost:8080/api/',
})

// const post = async (path, options = {}) => {
//     const response = await request.post(path, options)
//     return response.data
// }
const handleLoginApi = async (email, password) => {
    return await request.post('login', { email, password })
}

const handleGetUserApi = async (userId) => {
    return await request.get(`/user/get-users?id=${userId}`)
}

const handleCreateUserApi = async (data) => {
    return await request.post('/user/create-user', data)
}

export { handleLoginApi, handleGetUserApi, handleCreateUserApi }
