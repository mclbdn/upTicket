import companyNameReducer from "./companyNameReducer";
import { combineReducers } from "redux";
import isModalShownReducer from "./isModalShownReducer";
import companyIdReducer from "./companyIdReducer";
import ticketNameReducer from "./ticketNameReducer";
import ticketDescriptionReducer from "./ticketDescriptionReducer";
import ticketPriorityReducer from "./ticketPriorityReducer";

const allReducers = combineReducers({
  companyName: companyNameReducer,
  isModalShown: isModalShownReducer,
  companyId: companyIdReducer,
  ticketName: ticketNameReducer,
  ticketDescription: ticketDescriptionReducer,
  ticketPriority: ticketPriorityReducer,
});

export default allReducers;
