import React from "react";

const SingleTicket = ({ ticket_id, ticket_name, ticket_priority }) => {
  return (
    <div className="single-ticket">
      <div className="left-side">
        <div className="ticket-number">T-{ticket_id}</div>
        <div className="ticket-description">{ticket_name}</div>
      </div>
      <div className="right-side">
        <div className="ticket-priority">P{ticket_priority}</div>
      </div>
    </div>
  );
};

export default SingleTicket;
