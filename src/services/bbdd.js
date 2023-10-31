import axios from 'axios'
import { API_URL } from '../consts/consts'

const getByCategory = async (category) => {
    try {
        const response = await axios.get(API_URL + 'productos/planta')
        return response.data
    } catch (error) {
        throw error
    }
}

const getProductoById = async (id) => {
    try {
        const response = await axios.get(API_URL + `productos/${id}`)
        return response.data
    } catch (error) {
        throw error
    }
}

const getAll = () => {

}

const setProducto = async (producto, ruta) => {
    try {
        const response = await axios.post(API_URL + ruta + '/plantas', producto)
        return response.data
    } catch (error) {
        throw error
    }
}

const updateProducto = async (prodEditado, ruta) => {
    try {
        const response = await axios.put(API_URL + ruta + '/plantas', prodEditado)
        return response.data
    } catch (error) {
        throw error
    }
}

const deleteProducto = async (producto, ruta) => {
    try {
        const response = await axios.delete(API_URL + ruta, producto)
        return response.data
    } catch (error) {
        throw error
    }
}

export { getByCategory, getAll, getProductoById, setProducto, updateProducto, deleteProducto }