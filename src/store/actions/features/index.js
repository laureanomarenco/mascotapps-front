import axios from "axios";
import { FETCH_CITY } from "../types";
import { URL_CIUDAD_API } from "../../../url/url";

export function fetchCity() {
  return async function(dispatch) {
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
