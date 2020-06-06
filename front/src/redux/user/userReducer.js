import {
  GET_USER,
  GET_ALL,
} from './types';

const initialState = {
  user: {
    user: {
      name: '',
      leader: '',
    },
    users: '',
  },
}

export default function userReducer(state = initialState, action) {

  switch (action.type) {
    case GET_USER:
      return { ...state, user: action.payload };
    case GET_ALL:
      return { ...state, users: action.payload }
    default: return state;
  }
}
