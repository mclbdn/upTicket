const ticketsReducer = (state = null, action) => {
  switch (action.type) {
    case "SETTICKETS":
      return (state = action.payload);
    default:
      return state;
  }
};

export default ticketsReducer;
