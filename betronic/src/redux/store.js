import { createStore } from 'redux';
import nodeReducer from './reducer/nodeReducer';

const store = createStore(nodeReducer);

export default store;
