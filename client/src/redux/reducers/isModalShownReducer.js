const isModalShownReducer = (state = false, action) => {
  switch (action.type) {
    case "SETISMODALSHOWN":
      return (state = action.payload);
    default:
      return state;
  }
};

export default isModalShownReducer;
