import axios from "axios";
import { header } from "../../../constants/token";
import {
  GET_PETS_BY_STATUS,
  FETCH_PETS,
  FILTER_PETS,
  SEARCH_PETS,
  SORT_BY,
  GET_DETAIL,
  RESET_DETAIL,
  POST_PET,
  GET_SUCCESS,
  CLEAR_SUCCESS,
  GET_PET_COMMENTS,
  GET_SPECIES,
  DELETE_PET,
} from "../types";
import {
  GET_COMMENTS,
  PET_DETAIL,
  ALLPETS,
  SEARCH_BY,
  POST,
  FETCH_SUCCESS,
  PET_SPECIES,
  DELETE,
  UPDATE_POST_PET,
} from "../../../constants/url";

function fetchPets() {
  return async function(dispatch) {
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
function getSpecies() {
  return async function(dispatch) {
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
function getPetsByStatus(status) {
  return async function(dispatch) {
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
function filterPets(value) {
  return { type: FILTER_PETS, payload: value };
}

function searchPets(input) {
  return async function(dispatch) {
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

function sortBy(arr, filterType) {
  return function(dispatch) {
    const newArr = arr
      .sort((a, b) =>
        filterType === "ASC"
          ? a.name?.localeCompare(b?.name)
          : b.name?.localeCompare(a?.name)
      )
      .map((el) => el);
    dispatch({
      type: SORT_BY,
      payload: {
        filterType: filterType,
        arr: newArr,
      },
    });
  };
}

function getDetail(id) {
  return async function(dispatch) {
    try {
      const info = await axios.get(PET_DETAIL + id);
      return dispatch({
        type: GET_DETAIL,
        payload: info.data,
      });
    } catch (error) {
      return dispatch({
        type: GET_DETAIL,
        payload: { error: error.message },
      });
    }
  };
}

function resetDetail() {
  return async function(dispatch) {
    dispatch({
      type: RESET_DETAIL,
      payload: {},
    });
  };
}

function postPet(pet, token) {
  return async function(dispatch) {
    try {
      var json = await axios.post(POST, { pet: pet }, header(token));
      return dispatch({ type: POST_PET, payload: json.data });
    } catch (error) {
      return dispatch({
        type: POST_PET,
        payload: { error: error.message },
      });
    }
  };
}

function getPetComments(obj) {
  return async function(dispatch) {
    try {
      var json = await axios.get(GET_COMMENTS + obj.petId);
      return dispatch({
        type: GET_PET_COMMENTS,
        payload: json.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

function getSuccess() {
  return async function(dispatch) {
    try {
      const req = await axios(FETCH_SUCCESS);
      dispatch({
        type: GET_SUCCESS,
        payload: req.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

function clearSuccess() {
  return function(dispatch) {
    dispatch({
      type: CLEAR_SUCCESS,
      payload: [],
    });
  };
}

function deletePet(petId, token) {
  return async function(dispatch) {
    try {
      var datos = await axios.delete(DELETE + "?petId=" + petId, header(token));
      return dispatch({
        type: DELETE_PET,
        payload: datos.data,
      });
    } catch (error) {
      return dispatch({
        type: DELETE_PET,
        payload: { error: error.message },
      });
    }
  };
}

function updatePet(pet_data, token) {
  return async function(dispatch) {
    try {
      pet_data.name = pet_data.name ? pet_data.name : "Sin Nombre";
      await axios.put(UPDATE_POST_PET, pet_data, header(token));
      dispatch({
        type: "SOLVED_BRO",
        pet_data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export {
  fetchPets,
  getPetsByStatus,
  filterPets,
  searchPets,
  sortBy,
  getDetail,
  resetDetail,
  postPet,
  getPetComments,
  getSuccess,
  clearSuccess,
  getSpecies,
  deletePet,
  updatePet,
};
