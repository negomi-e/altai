import { SEND_DATA_PERSONAL_TO_STORE } from "./actionTypes";

export function sendDataToStore(dataAboutPerson) {
  return {
    type: SEND_DATA_PERSONAL_TO_STORE,
    payload: dataAboutPerson,
  };
}
