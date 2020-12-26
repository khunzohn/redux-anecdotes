const initialState = "";

export const setMessage = (message) => {
  return {
    type: "SET_MESSAGE",
    data: message,
  };
};

export const removeMessage = () => {
  return {
    type: "REMOVE_MESSAGE",
    data: ""
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
