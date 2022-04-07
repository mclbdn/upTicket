import React from "react";
import SingleTicket from "./SingleTicket";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setIsModalShown } from "../../../redux/actions";
import styles from "./SmallScreenMainContent.module.scss";

const SmallScreenMainContent = ({ mobile }) => {
  // REDUX
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.tickets);
  // REDUX
  return (
    <>
      <h1 className={styles.mobile_h1}>Dashboard</h1>
      <div className={styles.create_ticket_button_wrapper}>
        <button onClick={() => dispatch(setIsModalShown(true))}>
          + Create a New Ticket
        </button>
      </div>
      <div className={styles.small_screen_fields_description}>
        <div className={styles.fields_description_left}>
          <p className={styles.ticket_num}>Ticket #</p>
          <p>Description of the issue</p>
        </div>
        <div className={styles.fields_description_right}>
          <p>Priority</p>
        </div>
      </div>
      {mobile && (
        <div className={styles.small_screen_tickets_wrapper}>
          {tickets ? (
            tickets.map((ticket) => {
              return (
                <SingleTicket
                  key={ticket.ticket_id}
                  ticket_id={ticket.ticket_id}
                  ticket_name={ticket.ticket_name}
                  ticket_description={ticket.ticket_description}
                  ticket_priority={ticket.ticket_priority}
                  ticket_db_id={ticket._id}
                />
              );
            })
          ) : (
            <p>There are no tickets</p>
          )}
        </div>
      )}
    </>
  );
};

export default SmallScreenMainContent;
