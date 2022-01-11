import api from "./api";

export const ACTION_TYPES = {
    CREATE: 'CREATE',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
    FETCH_ALL: 'FETCH_ALL',
    FETCH_BY_ID: 'FETCH_BY_ID',
    COMPLETE: 'COMPLETE'
}

export const fetchAll = () => {
    return dispatch => {
        api.orders()
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

export const complete = (id) => dispatch => {
    return new Promise((resolve, reject) => {
        api.orders()
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
    api.orders()
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
    api.orders()
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
    api.orders()
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