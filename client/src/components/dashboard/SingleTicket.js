import React, { useEffect, useState } from "react";
import styles from "./SingleTicket.module.scss"

const SingleTicket = ({
  ticket_id,
  ticket_name,
  ticket_description,
  ticket_priority,
  setIsModalOpened,
  setTicketName,
  setTicketDescription,
  setTicketPriority,
  setIsUpdatingTicket,
  setActiveTicketId,
  ticket_db_id,
}) => {
  const [bgColor, setBgColor] = useState("");

  // Set different color to ticket-priority div according to its priority
  useEffect(() => {
    if (ticket_priority == 1) {
      setBgColor("rgba(242, 89, 75, 0.5)");
    } else if (ticket_priority == 2) {
      setBgColor("rgba(242, 205, 94, 0.5)");
    } else if (ticket_priority == 3) {
      setBgColor("rgba(92, 100, 242, 0.5)");
    }
  }, []);

  const handleClick = () => {
    setTicketName(ticket_name);
    setTicketPriority(ticket_priority);
    setTicketDescription(ticket_description);
    setIsModalOpened(true);
    setIsUpdatingTicket(true);
    setActiveTicketId(ticket_db_id);
  };

  return (
    <div className={styles.single_ticket} onClick={() => handleClick()}>
      <div className={styles.left_side}>
        <div className={styles.ticket_number}>T-{ticket_id}</div>
        <div className={styles.ticket_description}>{ticket_name}</div>
      </div>
      <div className={styles.right_side}>
        <div className={styles.ticket_priority} style={{ backgroundColor: bgColor }}>
          P{ticket_priority}
        </div>
      </div>
    </div>
  );
};

export default SingleTicket;
