import axios from 'axios'
import { GET_POSITIONS } from './types'
import { tokenConfig } from './auth';

export const getPositions = () => dispatch => {
    axios
        .get('/api/positions/')
        .then(res => {
            dispatch({
                type: GET_POSITIONS,
                payload: res.data
            })
        })
        .catch((err) => console.log(err))

}