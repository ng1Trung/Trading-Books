import axios from 'axios'

const request = axios.create({
    baseURL: 'http://localhost:8080/api/',
})

const handleCreateBookApi = async (data) => {
    return await request.post('/book/create-book', data)
}

const handleGetBookByStatusApi = async (bookStatus) => {
    return await request.get(`/book/get-books-by-status?status=${bookStatus}`)
}

export { handleCreateBookApi, handleGetBookByStatusApi }
