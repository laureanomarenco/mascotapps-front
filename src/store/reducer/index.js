import { NOTIFY } from "../actions";
import {
  SET_LOADING,
  TOTAL_VISITORS,
  GET_PUBLIC_USER_DETAIL,
  GET_SPECIES,
  GET_SUCCESS,
  CLEAR_SUCCESS,
  GET_PET_COMMENTS,
  USERS_POINTS_RANK,
  ADMIN_FETCH_USERS,
  USERS_ADOPTIONS_RANK,
  SORT_BY,
  GET_DONATIONS,
  GET_ALL_USERS,
  USER_POINTS,
  MY_PROFILE_DETAIL,
  POST_PET,
  GET_PETS,
  RESET_MY_PROFILE,
  FETCH_CITY,
  FETCH_PETS,
  GET_PETS_BY_STATUS,
  GET_DETAIL,
  RESET_DETAIL,
  FILTER_PETS,
  SEARCH_PETS,
  DONATE_USER_POINTS,
  CREAT_USER,
} from "../actions/types";

const initalState = {
  pets: [],
  pet: {},
  allPets: [],
  actualSort: "ASC",
  successArr: [],
  statusPets: [],
  filterPets: [],
  searchedPets: [],
  species: [],
  donations: [],
  cities: [],
  user: "",
  userPets: [],
  totalUsers: "",
  statusLogin: false,
  isLoading: true,
  notFound: false,
  publicUserDetail: {},
  myProfile: {},
  usersInfo: [],
  newPost: {},
  petComments: [],
  visitors: "",
  userPoints: 0,
  pointsRank: [],
  adoptionsRank: [],
  stateDonationPoints: "",
};

export default function reducer(state = initalState, action) {
  switch (action.type) {
    case FETCH_PETS:
      return {
        ...state,
        pets: !action.payload.error ? action.payload : [],
        allPets: !action.payload.error ? action.payload : [],
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
        publicUserDetail: {},
        notFound: false,
        userPets: [],
        newPost: {},
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
      var cities;
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
      action.payload.city !== ""
        ? (cities = races.filter((i) => i.city?.includes(action.payload.city)))
        : (cities = races);
      return {
        ...state,
        filterPets: cities,
        notFound: cities.length === 0 ? true : false,
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
        newPost: action.payload,
      };

    case GET_ALL_USERS:
      return {
        ...state,
        totalUsers: action.payload,
      };

    case ADMIN_FETCH_USERS:
      return {
        ...state,
        usersInfo: action.payload,
      };
    case GET_PUBLIC_USER_DETAIL:
      return {
        ...state,
        publicUserDetail: action.payload,
      };
    case GET_PETS:
      return {
        ...state,
        userPets: action.payload,
      };
    case MY_PROFILE_DETAIL:
      return {
        ...state,
        myProfile: action.payload,
      };
    case RESET_MY_PROFILE:
      return {
        ...state,
        myProfile: {},
      };
    case SORT_BY:
      return {
        ...state,
        pets: action.payload.arr,
        allPets: action.payload.arr,
        actualSort: action.payload.filterType,
      };
    case TOTAL_VISITORS:
      return {
        ...state,
        visitors: action.payload,
      };

    case GET_SUCCESS:
      return {
        ...state,
        successArr: action.payload,
      };
    case CLEAR_SUCCESS:
      return {
        ...state,
        successArr: action.payload,
      };

    case NOTIFY:
      return {
        ...state,
      };
    case GET_PET_COMMENTS:
      return {
        ...state,
        petComments: action.payload,
      };
    case USER_POINTS:
      return {
        ...state,
        userPoints: action.payload,
      };
    case USERS_POINTS_RANK:
      return {
        ...state,
        pointsRank: action.payload,
      };
    case USERS_ADOPTIONS_RANK:
      return {
        ...state,
        adoptionsRank: action.payload,
      };
    case DONATE_USER_POINTS:
      return {
        ...state,
        stateDonationPoints: action.payload.msg,
      };
    case CREAT_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}
