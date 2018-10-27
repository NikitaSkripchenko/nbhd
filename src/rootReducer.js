import { combineReducers } from 'redux';
import feed from './screens/main/feed/reducer'

const rootReduer = combineReducers({ feed });

export default rootReduer;