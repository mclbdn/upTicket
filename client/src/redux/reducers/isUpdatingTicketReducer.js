const isUpdatingTicketReducer = (state = false, action) => {
  switch (action.type) {
    case "SETISUPDATINGTICKET":
      return (state = action.payload);
    default:
      return state;
  }
};

export default isUpdatingTicketReducer;
