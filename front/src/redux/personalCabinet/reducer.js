import { SEND_DATA_PERSONAL_TO_STORE } from "./actionTypes";

const initialState = {
  dataPerson: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SEND_DATA_PERSONAL_TO_STORE:
      return {
        ...state,
        dataPerson: action.payload.data,
      };
    default:
      return state;
  }
}
