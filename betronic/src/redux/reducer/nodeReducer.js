import { ADD_NODE, GET_NODE, DEL_NODE} from '../actionTypes/actionTypes';

const initialState = { route: `/main`, nodes: [], title: `Main` };

const nodeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NODE:
      return { ...state, route: action.payload };

    case ADD_NODE:
      return {
        ...state,
        route: state.route.map((miniRoute) => {
          if (miniRoute.id === action.payload.id) {
            return { ...miniRoute, name: action.payload.inputName, username: action.payload.inputUsername };
          } else {
            return miniRoute;
          }
        }),
      };

    case DEL_NODE:
      return { ...state, route: state.route.filter((miniRoute) => miniRoute.id !== action.payload) };

    default:
      return state;
  }
};

export default nodeReducer;
