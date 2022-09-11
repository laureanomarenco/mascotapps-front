import { FETCH_PETS } from "../actions";

const initalState = {
    pets: []
  };
  
  export default function reducer(state = initalState, action) {
    switch (action.type) {
      case FETCH_PETS:
        return {
          ...state,
          pets: action.payload,
        };
  
      default:
        return state;
    }
  }