import axios from "axios";
import {
  MY_PROFILE,
  UPDATE_MY_PROFILE,
  GET_MY_PETS,
  CREAT,
  GET_INFO_FROM_DETAIL,
  INIT_TRANSACTION,
  UPDATE_TRANSACTION_STATUS,
  RATE_USER,
  POINTS,
  BUY,
  DONATE_POINTS,
} from "../../../url/url";
import {
  MY_PROFILE_DETAIL,
  RESET_MY_PROFILE,
  GET_PETS,
  CREAT_USER,
  GET_PUBLIC_USER_DETAIL,
  USER_POINTS,
} from "../types";

function myProfile(id) {
  return async function(dispatch) {
    try {
      var detail = await axios.post(MY_PROFILE, id);
      return dispatch({
        type: MY_PROFILE_DETAIL,
        payload: detail.data,
      });
    } catch (error) {
      return dispatch({
        type: MY_PROFILE_DETAIL,
        payload: { error: error.message },
      });
    }
  };
}

function resetMyProfile() {
  return async function(dispatch) {
    dispatch({
      type: RESET_MY_PROFILE,
    });
  };
}

function updateProfile(user) {
  return async function(dispatch) {
    try {
      var detail = await axios.put(UPDATE_MY_PROFILE, user);
      return dispatch({
        type: MY_PROFILE_DETAIL,
        payload: detail.data,
      });
    } catch (error) {
      return dispatch({
        type: MY_PROFILE_DETAIL,
        payload: { error: error.message },
      });
    }
  };
}

function getMyPets(token) {
  return async function(dispatch) {
    try {
      const datos = await axios.get(GET_MY_PETS, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return dispatch({
        type: GET_PETS,
        payload: datos.data,
      });
    } catch (error) {
      return dispatch({
        type: GET_PETS,
        payload: error.data,
      });
    }
  };
}
function CreateUser(input) {
  return async function(dispatch) {
    try {
      var json = await axios.post(CREAT, input);
      return dispatch({ type: CREAT_USER, payload: json.data });
    } catch (error) {
      return dispatch({
        type: CREAT_USER,
        payload: { error: error.message },
      });
    }
  };
}
function publicUserDetail(id) {
  return async function(dispatch) {
    try {
      var detail = await axios.get(GET_INFO_FROM_DETAIL + id);
      return dispatch({
        type: GET_PUBLIC_USER_DETAIL,
        payload: detail.data,
      });
    } catch (error) {
      return dispatch({
        type: GET_PUBLIC_USER_DETAIL,
        payload: { error: error.message },
      });
    }
  };
}
function beginTransaction(petId, idUser) {
  return async function() {
    try {
      var detail = await axios.post(INIT_TRANSACTION + "?petId=" + petId, {
        id: idUser,
      });
      console.log(detail);
    } catch (error) {
      console.log(error);
    }
  };
}

function updateTransactionStatus(idTrans, idLogged) {
  return async function() {
    try {
      //eslint-disable-next-line
      var transaction = await axios.put(
        UPDATE_TRANSACTION_STATUS + idTrans,
        idLogged
      );
    } catch (error) {
      console.log(error.message);
    }
  };
}

function rateUser(paq) {
  return async function() {
    try {
      //eslint-disable-next-line
      var review = await axios.post(RATE_USER, paq);
    } catch (error) {
      console.log(error.message);
    }
  };
}

function userPoints(id) {
  return async function(dispatch) {
    try {
      var msg = await axios.post(POINTS, id);
      return dispatch({ type: USER_POINTS, payload: msg.data });
    } catch (error) {
      return dispatch({
        type: USER_POINTS,
        payload: { error: error.message },
      });
    }
  };
}

function buyItems(compra) {
  return async function() {
    try {
      await axios.post(BUY, compra);
    } catch (error) {
      console.log(error);
    }
  };
}
function cancelPost(input) {
  return async function() {
    try {
      await axios.post(URL + "transactions/cancelpost", input);
    } catch (error) {
      console.log(error.message);
    }
  };
}

function finishPost(input) {
  return async function() {
    try {
      await axios.post(URL + "transactions/postsuccess", input);
    } catch (error) {
      console.log(error.message);
    }
  };
}
function donatePoints(body) {
  return async function() {
    try {
      await axios.post(DONATE_POINTS, body);
    } catch (error) {
      console.log(error.message);
    }
  };
}
export {
  myProfile,
  resetMyProfile,
  updateProfile,
  getMyPets,
  CreateUser,
  publicUserDetail,
  beginTransaction,
  updateTransactionStatus,
  rateUser,
  userPoints,
  buyItems,
  cancelPost,
  finishPost,
  donatePoints,
};
