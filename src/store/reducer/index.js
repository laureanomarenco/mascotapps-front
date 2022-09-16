import {
  FETCH_PETS,
  GET_DETAIL,
  RESET_DETAIL,
  GET_PETS_BY_STATUS,
  SET_LOADING,
  FILTER_PETS,
  FETCH_CITY,
  SEARCH_PETS
} from "../actions";

const initalState = {
  pets: [],
  pet: {},
  statusPets: [],
  isLoading: true,
  filterPets: [],
  searchedPets: [],
  notFound: false,
  cities: [],
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
        filterPets: state.statusPets,
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
      searchedPets: action.payload
    }

    default:
      return state;
  }
}