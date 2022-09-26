import axios from "axios";

import {
	URL,
	ALLPETS,
	PET_DETAIL,
	SEARCH_BY,
	DONATION,
	TOTAL_USERS,
	PET_SPECIES,
	POST,
	CREAT,
	GET_MY_PETS,
	GET_INFO_FROM_DETAIL,
	MY_PROFILE,
	UPDATE_MY_PROFILE,
	INIT_TRANSACTION,
	DELETE,
	UPDATE_TRANSACTION_STATUS,
	RATE_USER,
	UPDATE_POST_PET,
	NUMBER_OF_VISITORS,
	VISITORS_COUNTER,
} from "../../url/url";
import { URL_CIUDAD_API } from "../../url/url";

export const FETCH_PETS = "FETCH_PETS";
export const GET_DETAIL = "GET_DETAIL";
export const ADD_PET = "ADD_PET";
export const DELETE_PET = "DELETE_PET";
export const UPDATE_PET = "UPDATE_PET";
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
export const USER_REVIEWS = "USER_REVIEWS";
export const POST_PET = "POST_PET";
export const IS_LOGGED = "IS_LOGGED";
export const CREAT_USER = "CREAT_USER";
export const GET_PETS = "GET_PETS";
export const GET_PUBLIC_USER_DETAIL = "GET_PUBLIC_USER_DETAIL";
export const SORT_BY = "SORT_BY";
export const TOTAL_VISITORS = "TOTAL_VISITORS";

export const MY_PROFILE_DETAIL = "MY_PROFILE_DETAIL";
export const RESET_MY_PROFILE = "RESET_MY_PROFILE";
export const ADMIN_FETCH_USERS = "ADMIN_FETCH_USERS";

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
export function getMyPets(user) {
	return async function (dispatch) {
		try {
			const datos = await axios.post(GET_MY_PETS, { id: user?.sub });
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

export function getAllUsers() {
	return async function (dispatch) {
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
	return async function (dispatch) {
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

export function postPet(pet, id) {
	return async function (dispatch) {
		try {
			var json = await axios.post(POST, { pet: pet, user: { id: id } });
			return dispatch({ type: POST_PET, payload: json.data });
		} catch (error) {
			return dispatch({
				type: POST_PET,
				payload: { error: error.message },
			});
		}
	};
}

export function CreateUser(input) {
	return async function (dispatch) {
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

export function publicUserDetail(id) {
	return async function (dispatch) {
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

export function myProfile(id) {
	return async function (dispatch) {
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
export function updateProfile(user) {
	return async function (dispatch) {
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

export function resetMyProfile() {
	return async function (dispatch) {
		dispatch({
			type: RESET_MY_PROFILE,
			payload: {},
		});
	};
}

export function sortBy(arr, filterType) {
	return function (dispatch) {
		const newArr = arr
			.sort((a, b) =>
				filterType === "ASC"
					? a.name?.localeCompare(b?.name)
					: b.name?.localeCompare(a?.name)
			)
			.map(el => el);
		dispatch({
			type: SORT_BY,
			payload: {
				filterType: filterType,
				arr: newArr,
			},
		});
	};
}

export function adminFetchUsers() {
	return async function (dispatch) {
		try {
			const datos = await axios.get(URL + "users/");
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

export function deletePet(user, petId) {
	console.log("ESTOY EN LAS ACTIONS", user, petId);
	return async function (dispatch) {
		try {
			var datos = await axios.post(DELETE, {
				petId: petId,
				id: user?.sub,
			});
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

export function updatePet(user, pet_data) {
	return async function (dispatch) {
		try {
			await axios.put(UPDATE_POST_PET, {
				user: { userId: user?.sub },
				pet: pet_data,
			});
			dispatch({
				type: "SOLVED_BRO",
				user,
				pet_data,
			});
		} catch (error) {
			console.log(error);
		}
	};
}

export function beginTransaction(petId, idUser) {
	return async function () {
		try {
			var detail = await axios.post(
				INIT_TRANSACTION + "?petId=" + petId,
				{
					id: idUser,
				}
			);
			console.log(detail);
		} catch (error) {
			console.log(error);
		}
	};
}

export function updateTransactionStatus(idTrans, idLogged) {
	return async function () {
		try {
			var transaction = await axios.put(
				UPDATE_TRANSACTION_STATUS + idTrans,
				idLogged
			);
			console.log(transaction);
		} catch (error) {
			console.log(error.message);
		}
	};
}
export function rateUser(paq) {
	return async function () {
		try {
			var review = await axios.post(RATE_USER, paq);
			console.log(review);
		} catch (error) {
			console.log(error.message);
		}
	};
}
export function totalVisitors() {
	return async function (dispatch) {
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
	return async function () {
		try {
			await axios.get(VISITORS_COUNTER);
		} catch (error) {
			console.log(error.message);
		}
	};
}
