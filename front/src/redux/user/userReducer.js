import {
  GET_USER,
} from './types';

const initialState = {
  user: {
    user: {
      name: '',
      leader: '',
    }
  },
}

export default function userReducer(state = initialState, action) {

  switch (action.type) {
    case GET_USER:
      return { ...state, user: action.payload };

    default: return state;
  }
}
