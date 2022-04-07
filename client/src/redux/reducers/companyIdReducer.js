const companyIdReducer = (state = "", action) => {
  switch (action.type) {
    case "SETCOMPANYID":
      return (state = action.payload);
    default:
      return state;
  }
};

export default companyIdReducer;
