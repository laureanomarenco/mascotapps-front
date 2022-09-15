import {
  FETCH_PETS,
  GET_DETAIL,
  RESET_DETAIL,
  GET_PETS_BY_STATUS,
  SET_LOADING,
  FAVORITE_PET
} from "../actions";

const initalState = {
  pets: [],
  pet: {},
  statusPets: [],
  isLoading: true,
  favs:[]
};

export default function reducer(state = initalState, action) {
  switch (action.type) {
    case FETCH_PETS:
      return {
        ...state,
        pets: action.payload,
        isLoading: false,
      };
    case GET_DETAIL:
      return {
        ...state,
        pet: action.payload,
        isLoading: false,
      };
    case RESET_DETAIL:
      return {
        ...state,
        pet: {},
      };
    case GET_PETS_BY_STATUS:
      return {
        ...state,
        statusPets: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case FAVORITE_PET:
      console.log(action.payload)
      return {
        ...state,
        favs: [action.payload],

      }
    default:
      return state;
  }
}
