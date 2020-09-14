import {createStore} from 'redux';
import bookReducer from '../reduce/reducer';

const store=createStore(bookReducer);

export default store;