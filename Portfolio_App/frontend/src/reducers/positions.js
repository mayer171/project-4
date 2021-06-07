import { SELECT_POSITION, GET_POSITIONS } from '../actions/types.js'


const initialState = {
    positions: [],
    selected: ''
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_POSITIONS:
            return {
                ...state,
                positions: action.payload
            }
        default:
            return state
        case SELECT_POSITION:
            return {
                ...state,
                selected: action.payload
            }
    }
}