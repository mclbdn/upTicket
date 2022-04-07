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
} from "../../../redux/actions";

const Modal = ({
  handleCloseBtn,
  isUpdatingTicket,
  createTicket,
  // setTicketPriority,
  // ticketPriority,
  handleUpdate,
  handleDelete,
}) => {
  // REDUX
  const isModalShown = useSelector((state) => state.isModalShown);
  const ticketName = useSelector((state) => state.ticketName);
  const ticketDescription = useSelector((state) => state.ticketDescription);
  const ticketPriority = useSelector((state) => state.ticketPriority);
  const dispatch = useDispatch();
  // REDUX

  const handleClick = () => {
    handleCloseBtn();
    dispatch(setIsModalShown(false));
  };

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
