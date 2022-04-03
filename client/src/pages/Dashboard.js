import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faChartLine,
  faGear,
  faTableColumns,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import SingleTicket from "../components/SingleTicket";
import Modal from "../components/Modal";
import TicketsContainer from "../components/TicketsContainer";

const Dashboard = () => {
  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState("");
  const [ticketName, setTicketName] = useState("");
  const [ticketDescription, setTicketDescription] = useState("");
  const [ticketPriority, setTicketPriority] = useState("");
  const [companyId, setCompanyId] = useState();
  const [tickets, setTickets] = useState(null);
  const [isModalShown, setIsModalOpened] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [isUpdatingTicket, setIsUpdatingTicket] = useState(false);
  const [activeTicketId, setActiveTicketId] = useState("");

  const handleCloseBtn = () => {
    setIsModalOpened(false);
    setTicketName("");
    setTicketDescription("");
    setTicketPriority("");
    setIsUpdatingTicket(false);
    setActiveTicketId("");
  };

  async function handleUpdate() {
    try {
      const response = await fetch(
        "https://upticket-server.herokuapp.com/tickets/update",
        {
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
            ticket_id: activeTicketId,
          }),
        }
      );

      const data = await response.json();
      getAllTickets();
      handleCloseBtn();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDelete() {
    try {
      const response = await fetch(
        "https://upticket-server.herokuapp.com/tickets/delete",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-access-token": localStorage.getItem("token"),
          },
          body: JSON.stringify({
            companyId,
            ticket_id: activeTicketId,
          }),
        }
      );

      const data = await response.json();
      getAllTickets();
      handleCloseBtn();
    } catch (error) {
      console.log(error);
    }
  }

  async function getAllTickets() {
    try {
      const response = await fetch(
        "https://upticket-server.herokuapp.com/tickets/all",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            company_id: companyId,
          }),
        }
      );

      const data = await response.json();

      setTickets(data["tickets"]);
    } catch (error) {
      console.log(error);
    }
  }

  async function createTicket(e) {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://upticket-server.herokuapp.com/tickets/create",
        {
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
        }
      );
      const data = await response.json();
      console.log(data.status);
      if (data.status === "ok") {
        getAllTickets();
        handleCloseBtn();
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function populateCompanyName() {
    console.log(localStorage.getItem("token"));
    const req = await fetch(
      "https://upticket-server.herokuapp.com/tickets/gettickets",
      {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      }
    );

    const data = await req.json();

    if (data.status === "ok") {
      setCompanyName(data.company);
      setCompanyId(data.company_id);
    } else {
      alert(data.error);
    }
  }

  async function logoutUser() {
    const response = await fetch(
      "https://upticket-server.herokuapp.com/api/logout"
    );

    if (response.status === 200) {
      localStorage.clear();
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const user = jwtDecode(token);
      if (!user) {
        localStorage.removeItem("token");
        navigate("/login");
      } else {
        populateCompanyName();
      }
    } else {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    async function fetchTickets() {
      if (companyId) {
        await getAllTickets();
      }
    }

    fetchTickets();
  }, [companyId]);

  // Check window size
  useEffect(() => {
    if (window.innerWidth < 744) {
      setMobile(true);
    } else {
      setMobile(false);
    }

    const updateMedia = () => {
      if (window.innerWidth < 744) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };

    window.addEventListener("resize", updateMedia);

    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return (
    <main className="dashboard">
      <div className="tablet-top-container">
        <div className="company-name-and-welcome">
          <h2 className="company-name-h2">{companyName}</h2>
          <h2 className="welcome-to-dashboard-h2">
            Welcome to your dashboard! <span>🎉</span>
          </h2>
        </div>
        <div className="username">
          <p>John</p>
        </div>
      </div>
      <div className="tablet-left-menu">
        <a href="">
          <FontAwesomeIcon className="dashboard-icon" icon={faTableColumns} />
          Dashboard
        </a>
        <a href="">
          <FontAwesomeIcon className="dashboard-icon" icon={faChartLine} />
          Report
        </a>
        <a href="">
          <FontAwesomeIcon className="dashboard-icon" icon={faGear} />
          Settings
        </a>
        <a href="/logout" onClick={() => logoutUser()}>
          <FontAwesomeIcon
            className="dashboard-icon"
            icon={faArrowRightFromBracket}
          />
          Logout
        </a>
        <div className="bottom-paragraph-wrapper-bigger-screen-size">
          <p className="bottom-paragraph-bigger-screen-size">
            created by{" "}
            <a href="https://github.com/mclbdn/" target="_blank">
              @mclbdn
            </a>
          </p>
        </div>
      </div>
      <div className="tablet-off-white-container">
        <h1>Dashboard</h1>
        <div className="tablet-create-ticket-button-wrapper">
          <div className="modal-wrapper"></div>
          <button onClick={() => setIsModalOpened(true)}>
            + Create a New Ticket
          </button>
        </div>
        <div className="tablet-white-container">
          <div className="tablet-fields-description">
            <div className="fields-description-left">
              <p className="ticket-num">Ticket #</p>
              <p>Description of the issue</p>
            </div>
            <div className="fields-description-right">
              <p>Priority</p>
            </div>
          </div>
          {!mobile && (
            <TicketsContainer>
              {tickets ? (
                tickets.map((ticket) => {
                  return (
                    <SingleTicket
                      setTicketName={setTicketName}
                      setTicketDescription={setTicketDescription}
                      setTicketPriority={setTicketPriority}
                      setIsModalOpened={setIsModalOpened}
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
      </div>
      <h2 className="mobile-h2">
        Welcome to your dashboard! <span>🎉</span>
      </h2>
      <hr className="dashboard-divider" />
      <nav>
        <ul>
          <li>
            <div className="username">
              <p>John</p>
            </div>
          </li>
          <div className="icons">
            <li>
              <FontAwesomeIcon
                className="dashboard-icon"
                icon={faTableColumns}
              />
            </li>
            <li>
              <FontAwesomeIcon className="dashboard-icon" icon={faChartLine} />
            </li>
            <li>
              <FontAwesomeIcon className="dashboard-icon" icon={faGear} />
            </li>
            <li>
              <a href="/logout" onClick={() => logoutUser()}>
                {" "}
                <FontAwesomeIcon
                  className="dashboard-icon"
                  icon={faArrowRightFromBracket}
                />
              </a>
            </li>
          </div>
        </ul>
      </nav>
      <h1 className="mobile-h1">Dashboard</h1>
      <div className="create-ticket-button-wrapper">
        <div className="modal-wrapper"></div>
        <button onClick={() => setIsModalOpened(true)}>
          + Create a New Ticket
        </button>
      </div>
      <div className="fields-description">
        <div className="fields-description-left">
          <p className="ticket-num">Ticket #</p>
          <p>Description of the issue</p>
        </div>
        <div className="fields-description-right">
          <p>Priority</p>
        </div>
      </div>
      {mobile && (
        <div className="tickets-wrapper-mobile">
          {tickets ? (
            tickets.map((ticket) => {
              return (
                <SingleTicket
                  setTicketName={setTicketName}
                  setTicketDescription={setTicketDescription}
                  setTicketPriority={setTicketPriority}
                  setIsUpdatingTicket={setIsUpdatingTicket}
                  key={ticket.ticket_id}
                  ticket_id={ticket.ticket_id}
                  setIsModalOpened={setIsModalOpened}
                  ticket_name={ticket.ticket_name}
                  ticket_description={ticket.ticket_description}
                  ticket_priority={ticket.ticket_priority}
                  ticket_db_id={ticket._id}
                  setActiveTicketId={setActiveTicketId}
                />
              );
            })
          ) : (
            <p>There are no tickets</p>
          )}
        </div>
      )}

      <Modal
        shown={isModalShown}
        handleCloseBtn={() => {
          handleCloseBtn();
        }}
      >
        <FontAwesomeIcon
          icon={faXmark}
          className="fa-close-btn"
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
          <div className="label-and-input">
            <label htmlFor="ticket_name">Ticket Name:</label>
            <input
              value={ticketName}
              onChange={(e) => setTicketName(e.target.value)}
              type="text"
              name="ticket_name"
              id="ticket_name"
              required
            />
          </div>
          <div className="label-and-input">
            <label htmlFor="ticket-description">Ticket Description:</label>
            <input
              value={ticketDescription}
              onChange={(e) => setTicketDescription(e.target.value)}
              type="text"
              name="ticket_description"
              id="ticket_description"
              required
            />
          </div>
          <div className="label-and-input">
            <label htmlFor="ticket_priority">Ticket Priority:</label>
            <input
              onChange={(e) => setTicketPriority(e.target.value)}
              value={ticketPriority}
              type="number"
              min={1}
              max={3}
              name="ticket_priority"
              id="ticket_priority"
              required
            />
          </div>
          <div className="btns">
            {isUpdatingTicket ? (
              <>
                <button
                  onClick={() => handleUpdate()}
                  className="update-btn btn "
                  type="button"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete()}
                  className="delete-btn btn "
                  type="button"
                >
                  Delete
                </button>
              </>
            ) : (
              <button className="submit-btn btn" type="submit">
                Submit
              </button>
            )}
          </div>
        </form>
      </Modal>
      <div className="bottom-paragraph-wrapper">
        <p className="bottom-paragraph">
          created by{" "}
          <a href="https://github.com/mclbdn/" target="_blank">
            @mclbdn
          </a>
        </p>
      </div>
    </main>
  );
};

export default Dashboard;
