import React, { useEffect, useState } from "react";
import styles from "./SingleTicket.module.scss";
import { useDispatch } from "react-redux";
import {
  setIsModalShown,
  setTicketName,
  setTicketDescription,
  setTicketPriority,
  setIsUpdatingTicket,
  setActiveTicketId,
} from "../../../redux/actions";

const SingleTicket = ({
  ticket_id,
  ticket_name,
  ticket_description,
  ticket_priority,
  ticket_db_id,
}) => {
  const dispatch = useDispatch();
  const [bgColor, setBgColor] = useState("");

  // Set different color to ticket-priority div according to its priority
  useEffect(() => {
    console.log("IS UPDATING TICKET");
    if (ticket_priority == 1) {
      setBgColor("rgba(242, 89, 75, 0.5)");
    } else if (ticket_priority == 2) {
      setBgColor("rgba(242, 205, 94, 0.5)");
    } else if (ticket_priority == 3) {
      setBgColor("rgba(92, 100, 242, 0.5)");
    }
  }, [ticket_priority]);

  const handleClick = () => {
    dispatch(setTicketName(ticket_name));
    dispatch(setTicketPriority(ticket_priority));
    dispatch(setTicketDescription(ticket_description));
    dispatch(setIsUpdatingTicket(true));
    dispatch(setActiveTicketId(ticket_db_id));
    dispatch(setIsModalShown(true));
    console.log(bgColor);
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
