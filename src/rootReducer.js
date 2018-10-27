import { combineReducers } from 'redux';
import feed from './screens/main/feed/reducer';
import profile from "./screens/main/profile/reducer";

const rootReduer = combineReducers({ feed, profile });

export default rootReduer;