import { combineReducers } from 'redux';
import { authReducer } from './screens/auth'

const rootReduer = combineReducers({ authReducer });

export default rootReduer;