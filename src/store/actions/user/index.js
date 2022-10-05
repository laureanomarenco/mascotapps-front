import axios from "axios";
import { header } from "../../../constants/token";
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
  CANCEL_POST,
  FINISH_POST,
} from "../../../constants/url";
import {
  MY_PROFILE_DETAIL,
  RESET_MY_PROFILE,
  GET_PETS,
  CREAT_USER,
  GET_PUBLIC_USER_DETAIL,
  USER_POINTS,
  DONATE_USER_POINTS
} from "../types";

function myProfile(token) {
  return async function(dispatch) {
    try {
      var detail = await axios.get(MY_PROFILE, header(token));
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

function updateProfile(user, token) {
  return async function(dispatch) {
    try {
      var detail = await axios.put(UPDATE_MY_PROFILE, user, header(token));
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
      const datos = await axios.get(GET_MY_PETS, header(token));
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

function CreateUser(input, token) {
  return async function(dispatch) {
    try {
      var json = await axios.post(CREAT, input, header(token));
      return dispatch({ type: CREAT_USER, payload: json.status });
    } catch (error) {
      return dispatch({
        type: CREAT_USER,
        payload: error,
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

function beginTransaction(petId, token) {
  return async function() {
    try {
      await axios.post(INIT_TRANSACTION + "?petId=" + petId, {}, header(token));
    } catch (error) {
      console.log(error);
    }
  };
}

function updateTransactionStatus(idTrans, token) {
  return async function() {
    try {
      //eslint-disable-next-line
      var transaction = await axios.put(
        UPDATE_TRANSACTION_STATUS + idTrans,
        {},
        header(token)
      );
    } catch (error) {
      console.log(error.message);
    }
  };
}

function rateUser(paq, token) {
  return async function() {
    try {
      await axios.post(RATE_USER, paq, header(token));
    } catch (error) {
      console.log(error.message);
    }
  };
}

function userPoints(token) {
  return async function(dispatch) {
    try {
      var msg = await axios.get(POINTS, header(token));
      return dispatch({ type: USER_POINTS, payload: msg.data });
    } catch (error) {
      return dispatch({
        type: USER_POINTS,
        payload: { error: error.message },
      });
    }
  };
}

function buyItems(compra, token) {
  return async function() {
    try {
      await axios.post(BUY, compra, header(token));
    } catch (error) {
      console.log(error);
    }
  };
}
function cancelPost(input, token) {
  return async function() {
    try {
      await axios.post(CANCEL_POST, input, header(token));
    } catch (error) {
      console.log(error.message);
    }
  };
}

function finishPost(input, token) {
  console.log("🚀 ~ file: index.js ~ line 229 ~ finishPost ~ input", input);
  return async function() {
    try {
      let response = await axios.post(FINISH_POST, input, header(token));
      console.log(
        "🚀 ~ file: index.js ~ line 233 ~ returnfunction ~ response",
        response
      );
    } catch (error) {
      console.log(error.message);
    }
  };
}

function donatePoints(body, token) {
  return async function(dispatch) {
    try {
      let response = await axios.post(DONATE_POINTS, body, header(token));
      return dispatch({ type: DONATE_USER_POINTS, payload: response.data });
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
