import { FETCH_PETS, GET_DETAIL, RESET_DETAIL,GET_PETS_BY_STATUS } from "../actions";

const initalState = {
    pets: [],
    pet:{},
    statusPets:[]
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
        case GET_PETS_BY_STATUS:
          return{
            ...state,
            statusPets:action.payload 
          };
      default:
        return state;
    }
  }