// reducers.js
import { SET_DECKID, SET_DECKNAME } from './actions';

const initialState = {
  deckid: "",
  deckname: ""
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DECKID:
      return {
        ...state,
        deckid: action.payload
      };
    case SET_DECKNAME:
      return {
        ...state,
        deckname: action.payload
      }  
    default:
      return state;
  }
};

export default rootReducer;
