export const setCompanyName = (company_name) => {
  return {
    type: "SETCOMPANYNAME",
    payload: company_name,
  };
};

export const setIsModalShown = (bool) => {
  return {
    type: "SETISMODALSHOWN",
    payload: bool,
  };
};

export const setCompanyId = (id) => {
  return {
    type: "SETCOMPANYID",
    payload: id,
  };
};

export const setTicketName = (name) => {
  return {
    type: "SETTICKETNAME",
    payload: name,
  };
};

export const setTicketDescription = (description) => {
  return {
    type: "SETTICKETDESCRIPTION",
    payload: description,
  };
};

export const setTicketPriority = (priority) => {
  return {
    type: "SETTICKETPRIORITY",
    payload: priority,
  };
};

export const setIsUpdatingTicket = (bool) => {
  return {
    type: "SETISUPDATINGTICKET",
    payload: bool,
  };
};

export const setActiveTicketId = (id) => {
  return {
    type: "SETACTIVETICKETID",
    payload: id,
  };
};

export const setTickets = (tickets) => {
  return {
    type: "SETTICKETS",
    payload: tickets,
  };
};

export const setIsMainContent = (bool) => {
  return {
    type: "SETISMAINCONTENT",
    payload: bool,
  };
};

export const setTicketsFromLast7Days = (tickets) => {
  return {
    type: "SETTICKETSFROMLAST7DAYS",
    payload: tickets,
  };
};

export const setIsLoggingIn = (bool) => {
  return {
    type: "SETISLOGGINGIN",
    payload: bool,
  };
};

export const setEmail = (email) => {
  return {
    type: "SETEMAIL",
    payload: email,
  };
};

export const setPassword = (password) => {
  return {
    type: "SETPASSWORD",
    payload: password,
  };
};
