import { combineReducers } from 'redux'
import positions from './positions'
import errors from './errors';
import messages from './messages';
import auth from './auth';

export default combineReducers({
    positions,
    errors,
    messages,
    auth,

})