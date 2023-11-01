import axios from 'axios'
import { API_URL } from '../consts/consts'

const getByCategory = async (category) => {
    try {
        const response = await axios.get(API_URL + `categoria/${category}`)
        let res = response.data?.map((el) => (
            {
                ...el,
            }))
        return res
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
        const response = await axios.post(API_URL + ruta, producto)
        return response.data
    } catch (error) {
        throw error
    }
}

const updateProducto = async (prodEditado, ruta, id) => {
    try {
        const response = await axios.put(API_URL + ruta + `/${id}`, prodEditado)
        return response.data
    } catch (error) {
        throw error
    }
}

const deleteProducto = async (id) => {
    try {
        const response = await axios.delete(API_URL + 'productos/' + id)
        return response.data
    } catch (error) {
        throw error
    }
}

/////////////////////////PLANTAS/////////////////////////

const getPlantaById = async (id) => {
    try {
        const response = await axios.get(API_URL + `planta/${id}`)
        return response.data
    } catch (error) {
        throw error
    }
}

const setPlanta = async (producto, ruta) => {
    try {
        const response = await axios.post(API_URL + ruta, producto)
        return response.data
    } catch (error) {
        throw error
    }
}

const updatePlanta = async (prodEditado, ruta, id) => {
    try {
        const response = await axios.put(API_URL + ruta + `/${id}`, prodEditado)
        return response.data
    } catch (error) {
        throw error
    }
}

const deletePlanta = async (id) => {
    try {
        const response = await axios.delete(API_URL + 'planta/' + id)
        return response.data
    } catch (error) {
        throw error
    }
}

export {
    getByCategory,
    getAll,
    getProductoById,
    setProducto,
    updateProducto,
    deleteProducto,
    getPlantaById,
    setPlanta,
    updatePlanta,
    deletePlanta
}