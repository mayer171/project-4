import axios from 'axios'
import { GET_POSITIONS } from './types'

export const getPostions = () => dispacth => {
    axios
        .get('/api/positions/')
        .then(res => {
            dispacth({
                type: GET_POSITIONS,
                payload: res.data
            })
        })
        .catch((err) => console.log(err))

}