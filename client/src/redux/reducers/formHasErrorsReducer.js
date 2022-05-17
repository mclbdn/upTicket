const formHasErrorsReducer = (state = null, action) => {
  switch (action.type) {
    case "SETFORMHASERRORS":
      return (state = action.payload);
    default:
      return state;
  }
};

export default formHasErrorsReducer;
