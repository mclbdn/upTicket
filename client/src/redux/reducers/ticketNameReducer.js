const ticketNameReducer = (state = "", action) => {
  switch (action.type) {
    case "SETTICKETNAME":
      return (state = action.payload);
    default:
      return state;
  }
};

export default ticketNameReducer;
