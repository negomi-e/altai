import {
  GET_USER,

} from './types';

export function getUser(id) {

  return async function (dispatch) {
    try {
      const response = await fetch(`/users/${id}`);
      const { user } = await response.json();
      dispatch({
        type: GET_USER,
        payload: user
      });
    } catch (e) {
      console.log(e)
    }
  }
}
