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
