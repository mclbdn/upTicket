const ticketPriorityReducer = (state = "", action) => {
  switch (action.type) {
    case "SETTICKETPRIORITY":
      return (state = action.payload);
    default:
      return state;
  }
};

export default ticketPriorityReducer;
