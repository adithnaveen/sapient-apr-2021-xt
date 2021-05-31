import {combineReducers} from 'redux';
import contactsReducer from './contacts-reducer';

// combine reduder is a function which takes object or objects as reducer 

export default combineReducers({
    contactsReducer
});