import React from "react";
import SingleTicket from "./SingleTicket";
import TicketsContainer from "./TicketsContainer";
import styles from "./BiggerScreenSizeMainContent.module.scss";
import { setIsModalShown } from "../../../redux/actions";
import { useDispatch } from "react-redux";

const BiggerScreenSizeMainContent = ({
  mobile,
  tickets,
  setIsUpdatingTicket,
  setActiveTicketId,
}) => {
  // REDUX
  const dispatch = useDispatch();
  // REDUX
  return (
    <>
      <h1 className={styles.bigger_screen_h1}>Dashboard</h1>
      <div className={styles.bigger_screen_create_ticket_button_wrapper}>
        <button onClick={() => dispatch(setIsModalShown(true))}>
          + Create a New Ticket
        </button>
      </div>
      <div className={styles.bigger_screen_white_container}>
        <div className={styles.bigger_screen_fields_description}>
          <div className={styles.fields_description_left}>
            <p className={styles.ticket_num}>Ticket #</p>
            <p>Description of the issue</p>
          </div>
          <div className={styles.fields_description_right}>
            <p>Priority</p>
          </div>
        </div>
        {!mobile && (
          <TicketsContainer>
            {tickets ? (
              tickets.map((ticket) => {
                return (
                  <SingleTicket
                    setIsUpdatingTicket={setIsUpdatingTicket}
                    key={ticket.ticket_id}
                    ticket_id={ticket.ticket_id}
                    ticket_description={ticket.ticket_description}
                    ticket_name={ticket.ticket_name}
                    ticket_priority={ticket.ticket_priority}
                    ticket_db_id={ticket._id}
                    setActiveTicketId={setActiveTicketId}
                  />
                );
              })
            ) : (
              <p>There are no tickets</p>
            )}
          </TicketsContainer>
        )}
      </div>
    </>
  );
};

export default BiggerScreenSizeMainContent;
