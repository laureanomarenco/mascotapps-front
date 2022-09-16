import {
  FETCH_PETS,
  GET_DETAIL,
  RESET_DETAIL,
  GET_PETS_BY_STATUS,
  SET_LOADING,
  FILTER_PETS,
  FILTER_RACE,
  FETCH_CITY

} from "../actions";

const initalState = {
  pets: [],
  pet: {},
  statusPets: [],
  isLoading: true,
  filterPets:[],
  notFound:false,
  cities: []
  

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
        filterPets:[]
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
        if(state.filterPets.length===0){
        if(action.payload==="perro"||action.payload==="gato"||action.payload==="otra especie"){
          match=state.statusPets.filter(i=>i.specie==action.payload)
        }else if(action.payload==="macho"||action.payload==="hembra"){
          match=state.statusPets.filter(i=>i.gender==action.payload)
        }else {
          match=state.statusPets.filter(i=>i.age==action.payload)
        }
      }else{
        if(action.payload==="perro"||action.payload==="gato"||action.payload==="otra especie"){
          match=state.filterPets.filter(i=>i.specie==action.payload)
        }else if(action.payload==="macho"||action.payload==="hembra"){
          match=state.filterPets.filter(i=>i.gender==action.payload)
        }else {
          match=state.filterPets.filter(i=>i.age==action.payload)
        }
        
      }
        
        return{
         ...state, 
         filterPets:match,
         notFound: match.length===0?true:false
        }
        case FILTER_RACE:
          var matched= state.filterPets.length===0?state.statusPets.filter(i=>i.race===action.payload):
          state.filterPets.filter(i=>i.race===action.payload)
          return{
            ...state,
            filterPets:matched,
            notFound: match.length===0?true:false
          }
    case FETCH_CITY:
      return {
        ...state,
        cities: action.payload
      }



    default:
      return state;
  }
}
