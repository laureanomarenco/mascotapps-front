import axios from "axios";

export const FETCH_PETS = "FETCH_PETS";
export const GET_DETAIL = "GET_DETAIL";
export const ADD_PET = "ADD_PET";
export const DELETE_PET = "DELETE_PET";
export const EDIT_PET = "EDIT_PET";
export const RESET_DETAIL = "RESET_DETAIL";

export function fetchPets() {
	return async function (dispatch) {
		const datos = await axios.get(
			"https://mascotapps-stage.herokuapp.com/pets"
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
				"https://mascotapps-stage.herokuapp.com/pets/" + id
			);
			console.log(
				"🚀 ~ file: index.js ~ line 30 ~ returnfunction ~ info",
				info
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

export function resetDetail() {
	return async function (dispatch) {
		dispatch({
			type: RESET_DETAIL,
			payload: {},
		});
	};
}
