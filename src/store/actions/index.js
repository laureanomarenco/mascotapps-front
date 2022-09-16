import axios from "axios";

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

export function fetchPets() {
  return async function (dispatch) {
    const datos = await axios.get(
      "https://worker-production-2aad.up.railway.app/pets"
    );
    return dispatch({
      type: FETCH_PETS,
      payload: datos.data,
    });
  };
}

export function getDetail(id) {
  return async function (dispatch) {
    try {
      const info = await axios.get(
        "https://worker-production-2aad.up.railway.app/pets/" + id
      );
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
      const info = await axios.get(
        "https://worker-production-2aad.up.railway.app/pets/" + status
      );
      console.log(info.data);
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
      const cities = await axios.get(
        "https://apis.datos.gob.ar/georef/api/municipios?max=2500"
      );
      return dispatch({
        type: FETCH_CITY,
        payload: cities.data.municipios,
      });
    } catch (error) {
      return error.message;
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
