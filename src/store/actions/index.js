import axios from 'axios';

export const FETCH_PETS = 'FETCH_PETS';
export const GET_DETAIL = 'GET_DETAIL';
export const ADD_PET = 'ADD_PET';
export const DELETE_PET = 'DELETE_PET';
export const EDIT_PET = 'EDIT_PET';
export const RESET_DETAIL = 'RESET_DETAIL';
export const GET_PETS_BY_STATUS = 'GET_PETS_BY_STATUS';

export function fetchPets() {
    return async function(dispatch) {
        const datos = await axios.get('https://mascotapps-prod.herokuapp.com/pets')
       return dispatch({
            type: FETCH_PETS,
            payload: datos.data
       })
    }
}

export function getDetail (id) {
    return async function(dispatch) {
        try {
            const info = await axios.get('https://mascotapps-prod.herokuapp.com/pets/'+id)   
            return dispatch({ 
                type: 'GET_DETAIL',
                payload: info.data})
        } catch (error) {
            return dispatch({
                type: 'GET_DETAIL',
                payload: {error:error.message}
            })
        }
    };
}
export function getPetsByStatus(status){
    return async function (dispatch){
        
        try {
          const info =await axios.get("https://mascotapps-stage.herokuapp.com/pets/"+status)  
          console.log(info.data)
          return dispatch({
            type:GET_PETS_BY_STATUS,
            payload:info.data
          })
        } catch (error) {
           return dispatch({
            type:GET_PETS_BY_STATUS,
            payload:{error:error.message}
           }) 
        }
    }
}

export function resetDetail () {
    return async function(dispatch) {
        dispatch({
            type: RESET_DETAIL,
            payload: {}
        })
    }
}