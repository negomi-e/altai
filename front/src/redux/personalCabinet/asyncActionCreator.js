import { sendDataToStore } from "./actionCreator";

export function asyncSendDataToBase( id, education, experience, publicActivity, socialNetwork) {
    return async () => {
      fetch("/personalCab/getData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ id, education, experience, publicActivity, socialNetwork }),
    });
  }
}

// export function asyncGetDataAboutPerson() {
//   let id = localStorage.getItem('id')
//   return async (dispatch) => {
//     const data = await(await fetch(`/personalCab/SendDataAboutPerson/${id}`)).json()
//     return(dispatch(sendDataToStore(data)))
//   }
// }

