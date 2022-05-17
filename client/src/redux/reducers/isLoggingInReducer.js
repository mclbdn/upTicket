const isLoggingInReducer = (state = false, action) => {
  switch (action.type) {
    case "SETISLOGGINGIN":
      return (state = action.payload);
    default:
      return state;
  }
};

export default isLoggingInReducer;
