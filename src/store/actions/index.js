import axios from "axios";

import {
  ALLPETS,
  PET_DETAIL,
  SEARCH_BY,
  DONATION,
  USER_LOGGED,
  TOTAL_USERS,
  PET_SPECIES,
  LOGIN_LOGGED,
  POST,
} from "../../url/url";
import { URL_CIUDAD_API } from "../../url/url";

export const FETCH_PETS = "FETCH_PETS";
export const GET_DETAIL = "GET_DETAIL";
export const ADD_PET = "ADD_PET";
export const DELETE_PET = "DELETE_PET";
export const EDIT_PET = "EDIT_PET";
export const RESET_DETAIL = "RESET_DETAIL";
export const GET_PETS_BY_STATUS = "GET_PETS_BY_STATUS";
export const SET_LOADING = "SET_LOADING";
export const FILTER_PETS = "FILTER_PETS";
export const FILTER_RACE = "FILTER_RACE";
export const FETCH_CITY = "FETCH_CITY";
export const SEARCH_PETS = "SEARCH_PETS";
export const GET_USER_INFO = "GET_USER_INFO";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const GET_DONATIONS = "GET_DONATIONS";
export const GET_SPECIES = "GET_SPECIES";
export const POST_PET = "POST_PET";
export const IS_LOGGED = "IS_LOGGED";

export function fetchPets() {
  return async function (dispatch) {
    try {
      const datos = await axios.get(ALLPETS);
      return dispatch({
        type: FETCH_PETS,
        payload: datos.data,
      });
    } catch (error) {
      return dispatch({
        type: FETCH_PETS,
        payload: { error: error.message },
      });
    }
  };
}

export function getDetail(id) {
  return async function (dispatch) {
    try {
      const info = await axios.get(PET_DETAIL + id);
      return dispatch({
        type: "GET_DETAIL",
        payload: info.data,
      });
    } catch (error) {
      return dispatch({
        type: "GET_DETAIL",
        payload: { error: error.message },
      });
    }
  };
}
export function getPetsByStatus(status) {
  return async function (dispatch) {
    try {
      const info = await axios.get(PET_DETAIL + status);
      return dispatch({
        type: GET_PETS_BY_STATUS,
        payload: info.data,
      });
    } catch (error) {
      return dispatch({
        type: GET_PETS_BY_STATUS,
        payload: { error: error.message },
      });
    }
  };
}

export function fetchCity() {
  return async function (dispatch) {
    try {
      const cities = await axios.get(URL_CIUDAD_API);
      return dispatch({
        type: FETCH_CITY,
        payload: cities.data.municipios,
      });
    } catch (error) {
      return dispatch({
        type: FETCH_CITY,
        payload: { error: error.message },
      });
    }
  };
}

export function resetDetail() {
  return async function (dispatch) {
    dispatch({
      type: RESET_DETAIL,
      payload: {},
    });
  };
}

export const setLoading = (boolean) => (dispatch) => {
  dispatch({
    type: SET_LOADING,
    payload: boolean,
  });
};

export function filterPets(value) {
  return { type: FILTER_PETS, payload: value };
}

export function searchPets(input) {
  return async function (dispatch) {
    try {
      const pets = await axios.get(SEARCH_BY + `${input}`);
      return dispatch({
        type: SEARCH_PETS,
        payload: pets.data,
      });
    } catch (error) {
      return dispatch({
        type: SEARCH_PETS,
        payload: { error: error.message },
      });
    }
  };
}

export function getUserInfo() {
  return async function (dispatch) {
    try {
      const user = await axios.get(USER_LOGGED, { withCredentials: true });
      console.log("aca esta el usuarioooo", user);
      console.log(`user.data = ${user.data}`);
      return dispatch({
        type: "GET_USER_INFO",
        payload: user.data,
      });
    } catch (error) {
      return dispatch({
        type: "GET_USER_INFO",
        payload: { error: error.message },
      });
    }
  };
}
export function getAllUsers() {
  return async function (dispatch) {
    try {
      const users = await axios.get(TOTAL_USERS);
      return dispatch({
        type: "GET_ALL_USERS",
        payload: users.data,
      });
    } catch (error) {
      return dispatch({
        type: GET_ALL_USERS,
        payload: { error: error.message },
      });
    }
  };
}

export function getDonations() {
  return async function (dispatch) {
    try {
      const donations = await axios.get(DONATION);
      return dispatch({
        type: "GET_DONATIONS",
        payload: donations.data,
      });
    } catch (error) {
      return dispatch({
        type: GET_DONATIONS,
        payload: { error: error.message },
      });
    }
  };
}
export function getSpecies() {
  return async function (dispatch) {
    try {
      const datos = await axios.get(PET_SPECIES);
      return dispatch({
        type: GET_SPECIES,
        payload: datos.data,
      });
    } catch (error) {
      return dispatch({
        type: GET_SPECIES,
        payload: { error: error.message },
      });
    }
  };
}

export function postPet(pet) {
  console.log(pet);
  return async function (dispatch) {
    try {
      var json = await axios.post(
        POST,
        pet
      );
      console.log("pasooooo el postttttttt", json);
      return dispatch({ type: POST_PET, payload: json.data });
    } catch (error) {
      return dispatch({
        type: POST_PET,
        payload: { error: error.message },
      });
    }
  };
}

export function isLogged() {
  return async function (dispatch) {
    try {

      var log = await axios.get(LOGIN_LOGGED, { withCredentials: true });

      console.log(log)
      return dispatch({ type: IS_LOGGED, payload: log.data });
    } catch (error) {
      return dispatch({
        type: IS_LOGGED,
        payload: { error: error.message },
      });
    }
  };
}
