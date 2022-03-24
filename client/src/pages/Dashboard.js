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

const Dashboard = () => {
  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState("");
  const [ticketName, setTicketName] = useState("");
  const [ticketDescription, setTicketDescription] = useState("");
  const [ticketPriority, setTicketPriority] = useState("");
  const [companyId, setCompanyId] = useState();
  const [tickets, setTickets] = useState(null);

  async function getAllTickets() {
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
  }

  async function createTicket(e) {
    e.preventDefault();

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

  useEffect(async () => {
    if (companyId) {
      await getAllTickets();
    }
  }, [companyId]);

  return (
    <main>
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
        <button>+ Create a New Ticket</button>
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
      <div className="single-ticket">
        <div className="left-side">
          <div className="ticket-number">T-183</div>
          <div className="ticket-description">Create Mobile Wireframe</div>
        </div>
        <div className="right-side">
          <div className="ticket-priority">P1</div>
        </div>
      </div>
      <form onSubmit={logoutUser}>
        <button type="submit">Logout</button>
      </form>
      <form onSubmit={createTicket}>
        <label htmlFor="ticket_name">Ticket Name:</label>
        <input
          value={ticketName}
          onChange={(e) => setTicketName(e.target.value)}
          type="text"
          name="ticket_name"
          id="ticket_name"
          required
        />
        <label htmlFor="ticket-description">Ticket Description:</label>
        <input
          value={ticketDescription}
          onChange={(e) => setTicketDescription(e.target.value)}
          type="text"
          name="ticket_description"
          id="ticket_description"
          required
        />
        <label htmlFor="ticket_priority">Ticket Priority:</label>
        <input
          onChange={(e) => setTicketPriority(e.target.value)}
          value={ticketPriority}
          type="text"
          name="ticket_priority"
          id="ticket_priority"
          required
        />
        <button type="submit">Submit</button>
      </form>
      <p>{companyId}</p>
      {tickets ? (
        tickets.map((ticket) => {
          return <p>{ticket.ticket_name}</p>;
        })
      ) : (
        <p>There are no tickets</p>
      )}
    </main>
  );
};

export default Dashboard;
