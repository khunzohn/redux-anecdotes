const initialState = "";

let timeoutId

export const setNotification = (message, timeInSec) => {
  return async (dispatch) => {
    
    dispatch({
      type: "SET_MESSAGE",
      data: message,
    });
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      dispatch({
        type: "REMOVE_MESSAGE",
        data: "",
      });
    }, timeInSec * 1000);
  };
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MESSAGE":
      return action.data;
    case "REMOVE_MESSAGE":
      return "";
    default:
      return state;
  }
};

export default notificationReducer;
