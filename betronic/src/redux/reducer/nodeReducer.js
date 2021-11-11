import { ADD_NODE, GET_NODE, DEL_NODE} from '../actionTypes/actionTypes';

const initialState = { route: `/main`, nodes: [], title: `Main` };

const nodeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NODE:
      return { ...state, route: action.payload };

    case ADD_NODE:
      return {
        ...state,
          route: action.payload.route, nodes: action.payload.nodes, title: action.payload.title
      };

    case DEL_NODE:
      return { ...state, route: state.route.filter((miniRoute) => miniRoute.id !== action.payload) };

    default:
      return state;
  }
};

export default nodeReducer;
