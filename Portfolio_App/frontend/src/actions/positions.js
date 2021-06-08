import axios from 'axios'
import { ADD_POSITION, DELETE_POSITION, GET_POSITIONS} from './types'
import { tokenConfig } from './auth';
import { createMessage, returnErrors } from './messages';

export const getPositions = () => (dispatch, getState) => {
    axios
        .get('/api/positions/', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_POSITIONS,
                payload: res.data
            })
        })
        .catch((err) => console.log(err))
}

export const addPosition = (newPosition) => (dispatch, getState) => {
    axios
        .post('/api/positions/', newPosition, tokenConfig(getState))
        .then((res) => {
            dispatch(createMessage({ addPosition: 'Position Added'}))
            dispatch({
                type: ADD_POSITION,
                payload: res.data
            })
        })
        .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)))
}

export const deletePosition = (id) => (dispatch, getState) => {
    axios
        .delete(`/api/positions/${id}`, tokenConfig(getState))
        .then((res) => {
            dispatch({
                type: DELETE_POSITION,
                payload: id,
            })
        })
        .catch((err) => console.log(err))
}

