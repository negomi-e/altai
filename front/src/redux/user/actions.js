import {
  GET_USER,
  GET_ALL,
  GET_LEADERS
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

export function getAllUsers() {
console.log(333)
  return async function (dispatch) {
    try {
      const response = await fetch('/users/all/1');
      const { users } = await response.json();
      dispatch({
        type: GET_ALL,
        payload: users,
      });
    } catch (e) {
      console.log(e)
    }
  }
}

export function getLeaders() {
  console.log(333)
    return async function (dispatch) {
      try {
        const response = await fetch('/users/leaders/1');
        const { leaders } = await response.json();
        dispatch({
          type: GET_LEADERS,
          payload: leaders,
        });
      } catch (e) {
        console.log(e)
      }
    }
  }