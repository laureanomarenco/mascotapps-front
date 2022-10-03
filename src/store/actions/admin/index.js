import axios from "axios";
import {
  TOTAL_USERS,
  DONATION,
  URL,
  NUMBER_OF_VISITORS,
  VISITORS_COUNTER,
  ADMIN_CONSULT,
  POINTS_SALE,
} from "../../../url/url";
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
      var json = await axios.get(URL + "users/ranking");
      return dispatch({ type: USERS_ADOPTIONS_RANK, payload: json.data });
    } catch (error) {
      console.log(error);
    }
  };
}
export function adminFetchUsers(token) {
  return async function(dispatch) {
    try {
      const datos = await axios.get(URL + "users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("🚀 ~ file: index.js ~ line 73 ~ returnfunction ~ datos", datos)
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
      var json = await axios.get(URL + "users/ranking");
      return dispatch({ type: USERS_POINTS_RANK, payload: json.dataw });
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

export function deleteUser(obj,token) {
  return async function() {
    try {
      var json = await axios.post(URL + "admin/deleteUser/", obj, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(json.data);
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function deleteUserPosts(obj,token) {
  return async function() {
    try {
      var json = await axios.post(URL + "admin/cleanPostsOfUserId/", obj, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(json);
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function deletePetsWithNoUserId(obj,token) {
  return async function() {
    try {
      var json = await axios.post(URL + "admin/deletePetsWithNoUserId", obj, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(json);
    } catch (error) {
      console.log(error.message);
    }
  };
}
export function pointsMultiplier(obj, token) {
  return async function() {
    try {
      var multiply = await axios.post(POINTS_SALE, obj, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(multiply);
    } catch (error) {
      console.log(error.message);
    }
  };
}