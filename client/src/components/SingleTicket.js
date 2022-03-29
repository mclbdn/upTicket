import React, { useEffect, useState } from "react";

const SingleTicket = ({ ticket_id, ticket_name, ticket_priority }) => {
  const [bgColor, setBgColor] = useState("");
  useEffect(() => {
    if (ticket_priority == 1) {
      setBgColor("rgba(242, 89, 75, 0.5)");
    } else if (ticket_priority == 2) {
      setBgColor("rgba(242, 205, 94, 0.5)");
    } else if (ticket_priority == 3) {
      setBgColor("rgba(92, 100, 242, 0.5)");
    }
  }, []);

  return (
    <div className="single-ticket">
      <div className="left-side">
        <div className="ticket-number">T-{ticket_id}</div>
        <div className="ticket-description">{ticket_name}</div>
      </div>
      <div className="right-side">
        <div className="ticket-priority" style={{ backgroundColor: bgColor }}>
          P{ticket_priority}
        </div>
      </div>
    </div>
  );
};

export default SingleTicket;
