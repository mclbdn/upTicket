import companyNameReducer from "./companyNameReducer";
import { combineReducers } from "redux";
import isModalShownReducer from "./isModalShownReducer";
import companyIdReducer from "./companyIdReducer";
import ticketNameReducer from "./ticketNameReducer";
import ticketDescriptionReducer from "./ticketDescriptionReducer";
import ticketPriorityReducer from "./ticketPriorityReducer";
import isUpdatingTicketReducer from "./isUpdatingTicketReducer";
import activeTicketIdReducer from "./activeTicketIdReducer";
import ticketsReducer from "./ticketsReducer";
import isMainContentReducer from "./isMainContentReducer";
import ticketsFromLast7DaysReducer from "./ticketsFromLast7DaysReducer";
import isLoggingInReducer from "./isLoggingInReducer";
import emailReducer from "./emailReducer";
import passwordReducer from "./passwordReducer";
import setConfirmPasswordReducer from "./setConfirmPasswordReducer";
import formHasErrorsReducer from "./formHasErrorsReducer";

const allReducers = combineReducers({
  companyName: companyNameReducer,
  isModalShown: isModalShownReducer,
  companyId: companyIdReducer,
  ticketName: ticketNameReducer,
  ticketDescription: ticketDescriptionReducer,
  ticketPriority: ticketPriorityReducer,
  isUpdatingTicket: isUpdatingTicketReducer,
  activeTicketId: activeTicketIdReducer,
  tickets: ticketsReducer,
  isMainContent: isMainContentReducer,
  ticketsFromLast7Days: ticketsFromLast7DaysReducer,
  isLoggingIn: isLoggingInReducer,
  email: emailReducer,
  password: passwordReducer,
  confirmPassword: setConfirmPasswordReducer,
  formHasErrors: formHasErrorsReducer,
});

export default allReducers;
