import {
  GET_USER,
  GET_ALL,
  GET_LEADERS
} from './types';

const initialState = {
  user: {
    user: {
      name: '',
      leader: '',
    },
    users: '',
  },
  leaders: []
}

export default function userReducer(state = initialState, action) {

  switch (action.type) {
    case GET_USER:
      return { ...state, user: action.payload };
    case GET_ALL:
      return { ...state, users: action.payload }
  case GET_LEADERS:
        return { ...state, leaders: action.payload }
    default: return state;
  }
}
