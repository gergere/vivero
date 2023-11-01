/* eslint-disable no-useless-catch */
import axios from 'axios'
import { API_URL } from '../consts/consts'

const getByCategory = async (category) => {
try {
    const response = await axios.get(API_URL + 'plantas')
    let res = response.data?.map((el) => (
        {
        ...el,
        id: el.id_planta

        }))
    return res
} catch (error) {
    throw error
}
}

const getById = (id) => {

}

const getAll = () => {

}

const setProducto = async (producto,ruta) => {

    try {
        console.log(producto)
        const response = await axios.post(API_URL +ruta, producto, {headers:{"content-type":"multipart/form-data"}})
        return response.data
    } catch (error) {
        throw error
    }
}

const updateProducto = async (prodEditado,id) => {
    try {
        const response = await axios.put(API_URL+'plantas/'+id, prodEditado)
        return response.data
    } catch (error) {
        throw error
    }
}

const deleteProducto = async (id) => {
    try {
        const response = await axios.delete(API_URL + 'plantas/' + id)
        return response.data
    } catch (error) {
        throw error
    }
}

export { getByCategory, getById, getAll, setProducto, updateProducto, deleteProducto }