import api from "./api";

export const ACTION_TYPES = {
    CREATE: 'CREATE',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
    FETCH_ALL: 'FETCH_ALL',
    FETCH_BY_ID: 'FETCH_BY_ID'
}

export const fetchAll = () => {
    return dispatch => {
        api.cartProducts()
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

export const fetchById = (id) => dispatch => {
    return new Promise((resolve, reject) => {
        api.carts()
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

export const create = (data) => dispatch => {
    api.cartProducts()
        .create(data)
        .then(
            response => {
                dispatch({
                    type: ACTION_TYPES.CREATE,
                    payload: response.data
                })
            })
        .catch(err => console.log(err))
}

export const update = (id, data) => dispatch => {
    api.cartProducts()
        .update(id, data)
        .then(
            response => {
                dispatch({
                    type: ACTION_TYPES.UPDATE,
                    payload: { id, ...data }
                })
            })
        .catch(err => console.log(err))
}

export const Delete = (id) => dispatch => {
    api.cartProducts()
        .delete(id)
        .then(
            response => {
                dispatch({
                    type: ACTION_TYPES.DELETE,
                    payload: id
                })
            })
        .catch(err => console.log(err))
}