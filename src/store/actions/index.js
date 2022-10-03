import axios from "axios";

import { NOTIFY_POST } from "../../url/url";

export const NOTIFY = "NOTIFY";

export function sendNotification(name) {
  console.log("estoy entrando en la action");
  return async function(dispatch) {
    try {
      //eslint-disable-next-line
      let responde = await axios.post(NOTIFY_POST, name);
      return dispatch({
        type: NOTIFY,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export { fetchCity } from "./features";
//PETS
export {
  getPetsByStatus,
  fetchPets,
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
} from "./pets";

//USER
export {
  myProfile,
  resetMyProfile,
  updateProfile,
  getMyPets,
  CreateUser,
  publicUserDetail,
  updateTransactionStatus,
  beginTransaction,
  rateUser,
  userPoints,
  buyItems,
  cancelPost,
  finishPost,
  donatePoints,
} from "./user";

//ADMIN ACTIONS
export {
  getAllUsers,
  getDonations,
  usersAdoptionsRank,
  adminFetchUsers,
  usersPointsRank,
  sendConsultation,
  visitorsCounter,
  totalVisitors,
  deleteUser,
  deleteUserPosts,
  deletePetsWithNoUserId,
  pointsMultiplier,
} from "./admin";

// CAMBIAADASSSSSSSSSSSSSSSSSSS
//getMypets
