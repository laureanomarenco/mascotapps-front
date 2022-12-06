import axios from "axios";
import { header } from "../../../constants/token";
import {
  TOTAL_USERS,
  DONATION,
  ADOPTION_RANK,
  NUMBER_OF_VISITORS,
  VISITORS_COUNTER,
  ADMIN_CONSULT,
  POINTS_SALE,
  GET_USERS,
  POINTS_RANK,
  DELETE_USER,
  DELETE_POST_OF_USER,
  DELETE_PET_WITH_NO_OWNER,
  DELETE_POST,
  BAN_USERS,
  GET_ADMIN_ACTIONS,
} from "../../../constants/url";
import {
  GET_ALL_USERS,
  GET_DONATIONS,
  USERS_ADOPTIONS_RANK,
  ADMIN_FETCH_USERS,
  USERS_POINTS_RANK,
  TOTAL_VISITORS,
  SEND_QUERY,
} from "../types";

export function getAllUsers() {
  return async function(dispatch) {
    try {
      const users = await axios.get(TOTAL_USERS);
      return dispatch({
        type: GET_ALL_USERS,
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
  return async function(dispatch) {
    try {
      const donations = await axios.get(DONATION);
      return dispatch({
        type: GET_DONATIONS,
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

export function usersAdoptionsRank() {
  return async function(dispatch) {
    try {
      var json = await axios.get(ADOPTION_RANK);
      return dispatch({ type: USERS_ADOPTIONS_RANK, payload: json.data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function adminFetchUsers(token) {
  return async function(dispatch) {
    try {
      const datos = await axios.get(GET_USERS, header(token));
      return dispatch({
        type: ADMIN_FETCH_USERS,
        payload: datos.data,
      });
    } catch (error) {
      return dispatch({
        type: ADMIN_FETCH_USERS,
        payload: { error: error.message },
      });
    }
  };
}

export function usersPointsRank() {
  return async function(dispatch) {
    try {
      var json = await axios.get(POINTS_RANK);
      return dispatch({ type: USERS_POINTS_RANK, payload: json.data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function totalVisitors() {
  return async function(dispatch) {
    try {
      var total = await axios.get(NUMBER_OF_VISITORS);
      return dispatch({
        type: TOTAL_VISITORS,
        payload: total.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function visitorsCounter() {
  return async function() {
    try {
      await axios.get(VISITORS_COUNTER);
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function sendConsultation(data) {
  return async function(dispatch) {
    try {
      await axios.post(ADMIN_CONSULT, data);

      dispatch({
        type: SEND_QUERY,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function deleteUser(obj, token) {
  return async function() {
    try {
      var json = await axios.post(DELETE_USER, obj, header(token));
      console.log(json.data);
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function deleteUserPosts(obj, token) {
  return async function() {
    try {
      var json = await axios.post(DELETE_POST_OF_USER, obj, header(token));
      console.log(json);
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function deletePetsWithNoUserId(obj, token) {
  return async function() {
    try {
      var json = await axios.post(DELETE_PET_WITH_NO_OWNER, obj, header(token));
      console.log(json);
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function pointsMultiplier(obj, token) {
  return async function() {
    try {
      var multiply = await axios.post(POINTS_SALE, obj, header(token));
      console.log(multiply);
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function deletePost(obj, token) {
  return async function() {
    try {
      var json = await axios.post(DELETE_POST, obj, header(token));
      console.log(json);
    } catch (error) {
      console.log(error.message);
    }
  };
}
export function banUsers(obj, token) {
  return async function() {
    try {
      var json = await axios.post(BAN_USERS, obj, header(token));
      console.log(json);
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function getAdminActions(obj, token) {
  return async function() {
    try {
      const adminActions = axios.post(GET_ADMIN_ACTIONS, obj, header(token));
      console.log(adminActions);
    } catch (error) {
      console.log(error.message);
    }
  };
}
