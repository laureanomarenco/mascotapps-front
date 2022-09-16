import {
  FETCH_PETS,
  GET_DETAIL,
  RESET_DETAIL,
  GET_PETS_BY_STATUS,
  SET_LOADING,
  FILTER_PETS,
<<<<<<< HEAD
  FILTER_RACE,
  FETCH_CITY,
  SEARCH_PETS,
=======
  FETCH_CITY,
>>>>>>> cd95b06f65f77ae0acd0cc15f5ec4c77fe488d1f
} from "../actions";

const initalState = {
  pets: [],
  pet: {},
  statusPets: [],
  isLoading: true,
  filterPets: [],
<<<<<<< HEAD
  searchedPets: [],
=======
>>>>>>> cd95b06f65f77ae0acd0cc15f5ec4c77fe488d1f
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
<<<<<<< HEAD
        filterPets: [],
=======
        filterPets: state.statusPets,
>>>>>>> cd95b06f65f77ae0acd0cc15f5ec4c77fe488d1f
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
<<<<<<< HEAD
      var match;
      if (state.filterPets.length === 0) {
        if (
          action.payload === "perro" ||
          action.payload === "gato" ||
          action.payload === "otra especie"
        ) {
          match = state.statusPets.filter((i) => i.specie == action.payload);
        } else if (action.payload === "macho" || action.payload === "hembra") {
          match = state.statusPets.filter((i) => i.gender == action.payload);
        } else {
          match = state.statusPets.filter((i) => i.age == action.payload);
        }
      } else {
        if (
          action.payload === "perro" ||
          action.payload === "gato" ||
          action.payload === "otra especie"
        ) {
          match = state.filterPets.filter((i) => i.specie == action.payload);
        } else if (action.payload === "macho" || action.payload === "hembra") {
          match = state.filterPets.filter((i) => i.gender == action.payload);
        } else {
          match = state.filterPets.filter((i) => i.age == action.payload);
        }
      }

      return {
        ...state,
        filterPets: match,
        notFound: match.length === 0 ? true : false,
      };
    case FILTER_RACE:
      var matched =
        state.filterPets.length === 0
          ? state.statusPets.filter((i) => i.race === action.payload)
          : state.filterPets.filter((i) => i.race === action.payload);
      return {
        ...state,
        filterPets: matched,
        notFound: match.length === 0 ? true : false,
      };
=======
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

>>>>>>> cd95b06f65f77ae0acd0cc15f5ec4c77fe488d1f
    case FETCH_CITY:
      return {
        ...state,
        cities: action.payload,
      };

<<<<<<< HEAD
    case SEARCH_PETS:
      return {
        ...state,
        searchedPets: action.payload
      }
=======
>>>>>>> cd95b06f65f77ae0acd0cc15f5ec4c77fe488d1f
    default:
      return state;
  }
}
