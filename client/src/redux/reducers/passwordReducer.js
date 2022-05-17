const passwordReducer = (state = "", action) => {
  switch (action.type) {
    case "SETPASSWORD":
      return (state = action.payload);
    default:
      return state;
  }
};

export default passwordReducer;
