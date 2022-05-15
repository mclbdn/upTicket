const ticketsFromLast7DaysReducer = (state = [], action) => {
  switch (action.type) {
    case "SETTICKETSFROMLAST7DAYS":
      return (state = action.payload);
    default:
      return state;
  }
};

export default ticketsFromLast7DaysReducer;
