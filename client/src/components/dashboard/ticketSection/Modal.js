import React from "react";
import styles from "./Modal.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import {
  setIsModalShown,
  setTicketName,
  setTicketDescription,
  setTicketPriority,
  setIsUpdatingTicket,
  setActiveTicketId,
  setTickets,
} from "../../../redux/actions";

const Modal = () => {
  // REDUX
  const isModalShown = useSelector((state) => state.isModalShown);
  const ticketName = useSelector((state) => state.ticketName);
  const ticketDescription = useSelector((state) => state.ticketDescription);
  const ticketPriority = useSelector((state) => state.ticketPriority);
  const isUpdatingTicket = useSelector((state) => state.isUpdatingTicket);
  const companyId = useSelector((state) => state.companyId);
  const activeTicketId = useSelector((state) => state.activeTicketId);
  const dispatch = useDispatch();
  // REDUX

  const handleCloseBtn = () => {
    dispatch(setIsModalShown(false));
    dispatch(setTicketName(""));
    dispatch(setTicketDescription(""));
    dispatch(setTicketPriority(""));
    dispatch(setIsUpdatingTicket(false));
    dispatch(setActiveTicketId(""));
  };

  const handleClick = () => {
    handleCloseBtn();
    dispatch(setIsModalShown(false));
  };

  async function getAllTickets() {
    try {
      const response = await fetch(`https://upticket.herokuapp.com/api/ticket/fetchTickets?companyId=${companyId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": localStorage.getItem("token"),
        },
      });

      const data = await response.json();

      dispatch(setTickets(data["tickets"]));
    } catch (error) {
      console.log(error);
    }
  }

  async function createTicket(e) {
    e.preventDefault();

    try {
      const response = await fetch("https://upticket.herokuapp.com/api/ticket/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({
          ticketName,
          ticketDescription,
          ticketPriority,
          companyId,
        }),
      });

      const data = await response.json();
      if (response.status === 200) {
        getAllTickets();
        handleCloseBtn();
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function handleUpdate() {
    try {
      const response = await fetch("https://upticket.herokuapp.com/api/ticket/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({
          ticketName,
          ticketDescription,
          ticketPriority,
          companyId,
          ticketId: activeTicketId,
        }),
      });

      const data = await response.json();
      getAllTickets();
      handleCloseBtn();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDelete() {
    try {
      const response = await fetch("https://upticket.herokuapp.com/api/ticket/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({
          companyId,
          ticketId: activeTicketId,
        }),
      });

      const data = await response.json();
      getAllTickets();
      handleCloseBtn();
    } catch (error) {
      console.log(error);
    }
  }

  return isModalShown ? (
    <div
      className={styles.modal_backdrop}
      onClick={() => {
        handleClick();
      }}
    >
      <div
        className={styles.modal_content}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <FontAwesomeIcon
          icon={faXmark}
          className={styles.close_btn}
          onClick={() => {
            handleCloseBtn();
          }}
        />
        {isUpdatingTicket ? (
          <h3>Update this ticket</h3>
        ) : (
          <h3>Create a new ticket</h3>
        )}

        <form onSubmit={createTicket}>
          <div className={styles.label_and_input}>
            <label htmlFor="ticket_name">Ticket Name:</label>
            <input
              value={ticketName}
              onChange={(e) => dispatch(setTicketName(e.target.value))}
              type="text"
              name="ticket_name"
              id="ticket_name"
              required
            />
          </div>
          <div className={styles.label_and_input}>
            <label htmlFor="ticket-description">Ticket Description:</label>
            <input
              value={ticketDescription}
              onChange={(e) => dispatch(setTicketDescription(e.target.value))}
              type="text"
              name="ticket_description"
              id="ticket_description"
              required
            />
          </div>
          <div className={styles.label_and_input}>
            <label htmlFor="ticket_priority">Ticket Priority:</label>
            <input
              onChange={(e) => dispatch(setTicketPriority(e.target.value))}
              value={ticketPriority}
              type="number"
              min={1}
              max={3}
              name="ticket_priority"
              id="ticket_priority"
              required
            />
          </div>
          <div className={styles.btns}>
            {isUpdatingTicket ? (
              <>
                <button
                  onClick={() => handleUpdate()}
                  className={`${styles.update_btn} ${styles.btn}`}
                  type="button"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete()}
                  className={`${styles.delete_btn} ${styles.btn}`}
                  type="button"
                >
                  Delete
                </button>
              </>
            ) : (
              <button
                className={`${styles.submit_btn} ${styles.btn}`}
                type="submit"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  ) : null;
};

export default Modal;
