import {
  FETCH_PETS,
  GET_DETAIL,
  RESET_DETAIL,
  GET_PETS_BY_STATUS,
  SET_LOADING,
  FILTER_PETS,
  FILTER_RACE
} from "../actions";

const initalState = {
  pets: [],
  pet: {},
  statusPets: [],
  isLoading: true,
  filterPets:[]
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
      case FILTER_PETS:
        var match;
        if(action.payload==="perro"||action.payload==="gato"||action.payload==="otra especie"){
          match=state.statusPets.filter(i=>i.specie==action.payload)
        }else if(action.payload==="macho"||action.payload==="hembra"){
          match=state.statusPets.filter(i=>i.gender==action.payload)
        }else {
          match=state.statusPets.filter(i=>i.age==action.payload)
        }
        
        return{
         ...state, 
         filterPets:match
        }
        case FILTER_RACE:
          var matched=state.statusPets.filter(i=>i.race===action.payload)
          return{
            ...state,
            filterPets:matched
          }
    default:
      return state;
  }
}
