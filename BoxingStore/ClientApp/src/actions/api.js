import axios from "axios";

const baseUrl = "https://localhost:5001/api/"

export default {
    products(url = baseUrl + 'products/') {
        return {
            fetchAll: () => axios.get(url),
            fetchAllProductsByBrand: () => axios.get(url),
            fetchAllProductsByCategory: () => axios.get(url),
            fetchAllProductsByBrandAndCategory: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updateRecord) => axios.put(url + id, updateRecord),
            delete: id => axios.delete(url + id)
        }
    },

    cartProducts(url = baseUrl + 'cartProducts/') {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updateRecord) => axios.put(url + id, updateRecord),
            delete: id => axios.delete(url + id)
        }
    },

    orders(url = baseUrl + 'orders/') {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updateRecord) => axios.put(url + id, updateRecord),
            delete: id => axios.delete(url + id)
        }
    },

    carts(url = baseUrl + 'carts/') {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updateRecord) => axios.put(url + id, updateRecord),
            delete: id => axios.delete(url + id)
        }
    },

    users(url = baseUrl + 'users/') {
        return {
            login: user => axios.post(url + 'login/', user),
            register: newUser => axios.post(url + 'register/', newUser)
        }
    }
}