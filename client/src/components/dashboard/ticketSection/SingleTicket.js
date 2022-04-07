import React, { useEffect, useState } from "react";
import styles from "./SingleTicket.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setIsModalShown, setTicketName, setTicketDescription } from "../../../redux/actions";

const SingleTicket = ({
  ticket_id,
  ticket_name,
  ticket_description,
  ticket_priority,
  setTicketPriority,
  setIsUpdatingTicket,
  setActiveTicketId,
  ticket_db_id,
}) => {
  const [bgColor, setBgColor] = useState("");
  // REDUX
  const dispatch = useDispatch();
  const ticketName = useSelector((state) => state.ticketName);
  // REDUX

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
    dispatch(setTicketName(ticket_name))
    setTicketPriority(ticket_priority);
    dispatch(setTicketDescription(ticket_description))
    setIsUpdatingTicket(true);
    setActiveTicketId(ticket_db_id);
    dispatch(setIsModalShown(true));
  };

  return (
    <div className={styles.single_ticket} onClick={() => handleClick()}>
      <div className={styles.left_side}>
        <div className={styles.ticket_number}>T-{ticket_id}</div>
        <div className={styles.ticket_description}>{ticket_name}</div>
      </div>
      <div className={styles.right_side}>
        <div
          className={styles.ticket_priority}
          style={{ backgroundColor: bgColor }}
        >
          P{ticket_priority}
        </div>
      </div>
    </div>
  );
};

export default SingleTicket;
