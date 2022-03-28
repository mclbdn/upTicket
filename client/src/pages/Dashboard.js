import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faChartLine,
  faGear,
  faTableColumns,
} from "@fortawesome/free-solid-svg-icons";
import SingleTicket from "../components/SingleTicket";
import Modal from "../components/Modal";

const Dashboard = () => {
  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState("");
  const [ticketName, setTicketName] = useState("");
  const [ticketDescription, setTicketDescription] = useState("");
  const [ticketPriority, setTicketPriority] = useState("");
  const [companyId, setCompanyId] = useState();
  const [tickets, setTickets] = useState(null);
  const [isModalShown, setIsModalOpened] = useState(false);

  const handleCloseBtn = () => {
    setIsModalOpened(false);
    setTicketName("");
    setTicketDescription("");
    setTicketPriority("");
  };

  async function getAllTickets() {
    try {
      const response = await fetch("http://localhost:1337/tickets/all", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          company_id: companyId,
        }),
      });

      const data = await response.json();

      setTickets(data["tickets"]);
    } catch (error) {
      console.log(error);
    }
  }

  async function createTicket(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:1337/tickets/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ticketName,
          ticketDescription,
          ticketPriority,
          companyId,
        }),
      });

      const data = await response.json();
      console.log(data.status);
      if (data.status === "ok") {
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function populateCompanyName() {
    const req = await fetch("http://localhost:1337/tickets/gettickets", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });

    const data = await req.json();

    if (data.status === "ok") {
      setCompanyName(data.company);
      setCompanyId(data.company_id);
    } else {
      alert(data.error);
    }
  }

  async function logoutUser(e) {
    e.preventDefault();

    const response = await fetch("http://localhost:1337/api/logout");

    if (response.status === 200) {
      navigate("/logout");
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

  return (
    <main className="dashboard">
      {/* <h1>Dashboard {companyName}</h1> */}

      <h2>
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
              <FontAwesomeIcon
                className="dashboard-icon"
                icon={faArrowRightFromBracket}
              />
            </li>
          </div>
        </ul>
      </nav>
      <h1>Dashboard</h1>
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
      {tickets ? (
        tickets.map((ticket) => {
          return (
            <SingleTicket
              ticket_id={ticket.ticket_id}
              ticket_name={ticket.ticket_name}
              ticket_priority={ticket.ticket_priority}
            />
          );
        })
      ) : (
        <p>There are no tickets</p>
      )}
      <form onSubmit={logoutUser}>
        <button type="submit">Logout</button>
      </form>

      <p>{companyId}</p>
      <Modal
        shown={isModalShown}
        close={() => {
          setIsModalOpened(false);
        }}
      >
        <h3>Create a new ticket</h3>
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
            <button type="submit">Submit</button>
            <button type="button" onClick={() => handleCloseBtn()}>
              Close
            </button>
          </div>
        </form>
      </Modal>
    </main>
  );
};

export default Dashboard;
