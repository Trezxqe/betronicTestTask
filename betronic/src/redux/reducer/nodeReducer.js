import { createStore } from 'redux';
import { ADD_NODE } from '../actionTypes/actionTypes';

const initialState = {
  route: `/main`,
  nodes: [
    { title: '1', nodes: [], route: '1' },
    { title: '2', nodes: [], route: '2' },
    { title: '3', nodes: [], route: '3' },
  ],
  title: `Main`,
};

const nodeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NODE:
      console.log(action.payload);
      return {
        ...state,
        nodes: [...state.nodes, action.payload.state],
      };
    default:
      return state;
  }
};

export const store = createStore(
  nodeReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
