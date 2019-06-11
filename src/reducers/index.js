import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';

// combineReducers function from redux library makes our reducers play nicely together
// will always return an array
export default combineReducers({
  libraries: LibraryReducer
});
