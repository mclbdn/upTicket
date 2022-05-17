const emailReducer = (state = "", action) => {
  switch (action.type) {
    case "SETEMAIL":
      return (state = action.payload);
    default:
      return state;
  }
};

export default emailReducer;
