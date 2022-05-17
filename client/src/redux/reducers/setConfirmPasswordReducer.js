const setConfirmPasswordReducer = (state = "", action) => {
  switch (action.type) {
    case "SETCONFIRMPASSWORD":
      return (state = action.payload);
    default:
      return state;
  }
};

export default setConfirmPasswordReducer;
