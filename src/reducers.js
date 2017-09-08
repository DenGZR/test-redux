import { combineReducers } from 'redux';
import UsersReducer from './modules/Users/UsersReducer';

export default combineReducers({
  users: UsersReducer,
});
