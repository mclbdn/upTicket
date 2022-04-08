const isMainContentReducer = (state = true, action) => {
  switch (action.type) {
    case "SETISMAINCONTENT":
      return (state = action.payload);
    default:
      return state;
  }
};

export default isMainContentReducer;
