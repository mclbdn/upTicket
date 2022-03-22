import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState("");
  const [ticketName, setTicketName] = useState("");
  const [ticketDescription, setTicketDescription] = useState("");
  const [ticketPriority, setTicketPriority] = useState("");
  const [companyId, setCompanyId] = useState("");

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
    const req = await fetch("http://localhost:1337/api/companyname", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });

    const data = await req.json();

    if (data.status === "ok") {
      setCompanyName(data.company);
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
    console.log(token);

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

  return (
    <div>
      <h1>Dashboard {companyName}</h1>
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
        <label htmlFor="company_id">Company ID:</label>
        <input
          onChange={(e) => setCompanyId(e.target.value)}
          value={companyId}
          type="text"
          name="company_id"
          id="company_id"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Dashboard;
