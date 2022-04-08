import React, { useEffect } from "react";
import SingleTicket from "./SingleTicket";
import TicketsContainer from "./TicketsContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlash } from "@fortawesome/free-solid-svg-icons";
import { setIsModalShown, setTickets } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import styles from "./BiggerScreenSizeMainContent.module.scss";

const BiggerScreenSizeMainContent = () => {
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.tickets);
  const companyId = useSelector((state) => state.companyId);

  async function getAllTickets() {
    try {
      const response = await fetch("https://upticket-server.herokuapp.com/tickets/all", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          company_id: companyId,
        }),
      });

      const data = await response.json();

      dispatch(setTickets(data["tickets"]));
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    console.log("FETCHING BIG SCREEN");
    async function fetchTickets() {
      if (companyId) {
        await getAllTickets();
      }
    }

    fetchTickets();
  }, [companyId]);

  return (
    <>
      <h1 className={styles.bigger_screen_h1}>Dashboard</h1>
      <div className={styles.bigger_screen_create_ticket_button_wrapper}>
        <button onClick={() => dispatch(setIsModalShown(true))}>+ Create a New Ticket</button>
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

        <TicketsContainer>
          {tickets ? (
            tickets.map((ticket) => {
              return (
                <SingleTicket
                  key={ticket.ticket_id}
                  ticket_id={ticket.ticket_id}
                  ticket_description={ticket.ticket_description}
                  ticket_name={ticket.ticket_name}
                  ticket_priority={ticket.ticket_priority}
                  ticket_db_id={ticket._id}
                />
              );
            })
          ) : (
            <div className={styles.spinner_container}>
              <FontAwesomeIcon className={styles.spinner} icon={faSlash} />
              <p>Loading tickets...</p>
            </div>
          )}
        </TicketsContainer>
      </div>
    </>
  );
};

export default BiggerScreenSizeMainContent;
