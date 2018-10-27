import { combineReducers } from 'redux';
import { authReducer as auth } from './screens/auth'
import feed from './screens/main/feed/reducer'

const rootReduer = combineReducers({ auth, feed });

export default rootReduer;