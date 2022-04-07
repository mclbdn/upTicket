import companyNameReducer from "./companyNameReducer";
import { combineReducers } from "redux";
import isModalShownReducer from "./isModalShownReducer";
import companyIdReducer from "./companyIdReducer";
import ticketNameReducer from "./ticketNameReducer";
import ticketDescriptionReducer from "./ticketDescriptionReducer";
import ticketPriorityReducer from "./ticketPriorityReducer";
import isUpdatingTicketReducer from "./isUpdatingTicketReducer";
import activeTicketIdReducer from "./activeTicketIdReducer";

const allReducers = combineReducers({
  companyName: companyNameReducer,
  isModalShown: isModalShownReducer,
  companyId: companyIdReducer,
  ticketName: ticketNameReducer,
  ticketDescription: ticketDescriptionReducer,
  ticketPriority: ticketPriorityReducer,
  isUpdatingTicket: isUpdatingTicketReducer,
  activeTicketId: activeTicketIdReducer,
});

export default allReducers;
