import axios from 'axios';

const request = axios.create({
    baseURL: 'http://localhost:3000/'
})

export const getProducts = async (path) => {
    const response = await axios.get(path)
    return response.data
}

export default request