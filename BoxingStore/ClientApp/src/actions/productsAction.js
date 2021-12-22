import api from "./api";

export const ACTION_TYPES = {
    CREATE: 'CREATE',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
    FETCH_ALL: 'FETCH_ALL',
    FETCH_BY_BRAND: 'FETCH_BY_BRAND',
    FETCH_BY_CATEGORY: 'FETCH_BY_CATEGORY',
    FETCH_BY_BRAND_CATEGORY: 'FETCH_BY_BRAND_CATEGORY',
    FETCH_BY_ID: 'FETCH_BY_ID'
}

export const fetchAll = () => {
    return dispatch => {
        api.products()
            .fetchAll()
            .then(
                response => {
                    dispatch({
                        type: ACTION_TYPES.FETCH_ALL,
                        payload: response.data
                    })
                })
            .catch(err => console.log(err))
    }
}

export const fetchAllProductsByBrand = (brand) => {
    return dispatch => {
        api.products()
            .fetchAllProductsByBrand()
            .then(
                response => {
                    dispatch({
                        type: ACTION_TYPES.FETCH_BY_BRAND,
                        payload: response.data,
                        brand: brand
                    })
                })
            .catch(err => console.log(err))
    }
}

export const fetchAllProductsByCategory = (category) => {
    return dispatch => {
        api.products()
            .fetchAllProductsByCategory()
            .then(
                response => {
                    dispatch({
                        type: ACTION_TYPES.FETCH_BY_CATEGORY,
                        payload: response.data,
                        category: category
                    })
                })
            .catch(err => console.log(err))
    }
}

export const fetchAllProductsByBrandAndCategory = (brand, category) => {
    return dispatch => {
        api.products()
            .fetchAllProductsByBrandAndCategory()
            .then(
                response => {
                    dispatch({
                        type: ACTION_TYPES.FETCH_BY_BRAND_CATEGORY,
                        payload: response.data,
                        brand: brand,
                        category: category
                    })
                })
            .catch(err => console.log(err))
    }
}


export const fetchById = (id) => dispatch => {
    return new Promise((resolve, reject) => {
        api.products()
            .fetchById(id)
            .then(
                response => {
                    dispatch({
                        type: ACTION_TYPES.FETCH_BY_ID,
                        payload: response.data
                    });
                    resolve(response);
                })
            .catch(err => {
                console.log(err);
                reject(err);
            });
    });
}

export const create = (data, onSuccess) => dispatch => {
    api.products()
        .create(data)
        .then(
            response => {
                dispatch({
                    type: ACTION_TYPES.CREATE,
                    payload: response.data
                })
                onSuccess()
            })
        .catch(err => console.log(err))
}

export const update = (id, data, onSuccess) => dispatch => {
    api.products()
        .update(id, data)
        .then(
            response => {
                dispatch({
                    type: ACTION_TYPES.UPDATE,
                    payload: { id, ...data }
                })
                onSuccess()
            })
        .catch(err => console.log(err))
}

export const Delete = (id, onSuccess) => dispatch => {
    api.products()
        .delete(id)
        .then(
            response => {
                dispatch({
                    type: ACTION_TYPES.DELETE,
                    payload: id
                })
                onSuccess()
            })
        .catch(err => console.log(err))
}