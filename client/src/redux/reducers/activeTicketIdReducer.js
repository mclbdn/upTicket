const activeTicketIdReducer = (state = "", action) => {
  switch (action.type) {
    case "SETACTIVETICKETID":
      return (state = action.payload);
    default:
      return state;
  }
};

export default activeTicketIdReducer;
