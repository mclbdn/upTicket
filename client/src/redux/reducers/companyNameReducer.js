const companyNameReducer = (state = "", action) => {
  switch (action.type) {
    case "SETCOMPANYNAME":
      return (state = action.payload);
    default:
      return state;
  }
};

export default companyNameReducer;
