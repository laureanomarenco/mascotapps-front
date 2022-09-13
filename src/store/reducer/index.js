import { FETCH_PETS, GET_DETAIL, RESET_DETAIL } from "../actions";

const initalState = {
    pets: [],
    pet:{}
  };
  
  export default function reducer(state = initalState, action) {
    switch (action.type) {
      case FETCH_PETS:
        return {
          ...state,
          pets: action.payload,
        };
      case GET_DETAIL:
        return {
          ...state, 
          pet: action.payload
        };
      case RESET_DETAIL:
        return {
          pet: {}
        };
  
      default:
        return state;
    }
  }