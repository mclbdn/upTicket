const ticketDescriptionReducer = (state = "", action) => {
  switch (action.type) {
    case "SETTICKETDESCRIPTION":
      return (state = action.payload);
    default:
      return state;
  }
};

export default ticketDescriptionReducer;
