import axios from 'axios'
import { API_URL } from '../consts/consts'

const getByCategory = (category) => {

}

const getById = (id) => {

}

const getAll = () => {

}

const setProducto = async (producto, ruta) => {
    try {
        const response = await axios.post(API_URL + ruta, producto)
        return response.data
    } catch (error) {
        throw error
    }
}

export { getByCategory, getById, getAll, setProducto }