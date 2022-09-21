import {
  FETCH_PETS,
  GET_DETAIL,
  RESET_DETAIL,
  GET_PETS_BY_STATUS,
  SET_LOADING,
  FILTER_PETS,
  FETCH_CITY,
  SEARCH_PETS,
  GET_USER_INFO,
  GET_DONATIONS,
  GET_SPECIES,
  POST_PET,
  GET_ALL_USERS,
  IS_LOGGED,
} from "../actions";

const initalState = {
  pets: [],
  pet: {},
  statusPets: [],
  filterPets: [],
  searchedPets: [],
  species: [],
  
  donations: [],
  cities: [],

  user: {},
  totalUsers: "",
  statusLogin: false,

  isLoading: true,
  notFound: false,
};

export default function reducer(state = initalState, action) {
  switch (action.type) {
    case FETCH_PETS:
      return {
        ...state,
        pets: !action.payload.error ? action.payload : [],
        isLoading: false,
        notFound: !action.payload.error ? false : true,
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
        filterPets: [],
        searchedPets: [],
        notFound: false,
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
      var especie;
      var genders;
      var ages;
      var races;
      action.payload.specie !== ""
        ? (especie = state.statusPets.filter(
            (i) => i.specie === action.payload.specie
          ))
        : (especie = state.statusPets);
      action.payload.gender !== ""
        ? (genders = especie.filter((i) => i.gender === action.payload.gender))
        : (genders = especie);
      action.payload.age !== ""
        ? (ages = genders.filter((i) => i.age === action.payload.age))
        : (ages = genders);
      action.payload.race !== ""
        ? (races = ages.filter((i) => i.race === action.payload.race))
        : (races = ages);

      return {
        ...state,
        filterPets: races,
        notFound: races.length === 0 ? true : false,
      };

    case FETCH_CITY:
      return {
        ...state,
        cities: action.payload,
      };

    case SEARCH_PETS:
      return {
        ...state,
        searchedPets: action.payload,
      };
    case GET_USER_INFO:
      return {
        ...state,
        user: action.payload,
      };

    case GET_DONATIONS:
      return {
        ...state,
        donations: action.payload,
      };

    case GET_SPECIES:
      return {
        ...state,
        species: action.payload,
      };
    case POST_PET:
      return {
        ...state,
      };

    case GET_ALL_USERS:
      return {
        ...state,
        totalUsers: action.payload,
      };

    case IS_LOGGED:
      var status;
      if(action.payload.isLogged) {status = true}
      else {status = false}
      return {
        ...state,
        statusLogin: status,
      };

    default:
      return state;
  }
}
