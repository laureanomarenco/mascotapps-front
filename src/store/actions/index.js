import axios from 'axios';

export const FETCH_PETS = 'FETCH_PETS';

export function fetchPets() {
    return async function(dispatch) {
        await axios.get('http://localhost:3001/api/pets')
        .then(pets => {
            dispatch({
                type: FETCH_PETS,
                payload: pets.data
            })
        })
        .catch(err => {console.log(err)})
    }
}