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

export function addInitiative(product) {

  return async function (dispatch) {
    try {
      const response = await fetch('/users/addinit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product }),
      });
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
