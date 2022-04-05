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
import SingleTicket from "../components/dashboard/ticketSection/SingleTicket";
import Modal from "../components/dashboard/ticketSection/Modal";
import TicketsContainer from "../components/dashboard/ticketSection/TicketsContainer";
import styles from "./Dashboard.module.scss";
import TopContainer from "../components/dashboard/TopContainer";
import LefMenu from "../components/dashboard/LeftMenu";

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
      navigate("/login");
    }
  }

  async function logoutUser() {
    const response = await fetch(
      "https://upticket-server.herokuapp.com/api/logout"
    );

    if (response.status === 200) {
      localStorage.clear();
      navigate("/logout");
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
    <main className={styles.dashboard}>
      <TopContainer companyName={companyName} />
      <LefMenu logoutUser={logoutUser} />
      {/* <div className={styles.bigger_screen_left_menu}>
        <a href="">
          <FontAwesomeIcon
            className={styles.dashboard_icon}
            icon={faTableColumns}
          />
          Dashboard
        </a>
        <a href="">
          <FontAwesomeIcon
            className={styles.dashboard_icon}
            icon={faChartLine}
          />
          Report
        </a>
        <a href="">
          <FontAwesomeIcon className={styles.dashboard_icon} icon={faGear} />
          Settings
        </a>
        <a onClick={() => logoutUser()}>
          <FontAwesomeIcon
            className={styles.dashboard_icon}
            icon={faArrowRightFromBracket}
          />
          Logout
        </a>
        <div className={styles.bigger_screen_bottom_paragraph_wrapper}>
          <p className={styles.bigger_screen_bottom_paragraph}>
            created by{" "}
            <a
              href="https://github.com/mclbdn/"
              target="_blank"
              rel="noreferrer"
            >
              @mclbdn
            </a>
          </p>
        </div>
      </div> */}
      <div className={styles.bigger_screen_off_white_container}>
        <h1>Dashboard</h1>
        <div className={styles.bigger_screen_create_ticket_button_wrapper}>
          <div className="modal-wrapper"></div>
          <button onClick={() => setIsModalOpened(true)}>
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
      <h2 className={styles.small_screen_welcome}>
        Welcome to your dashboard! <span>🎉</span>
      </h2>
      <hr className={styles.dashboard_divider} />
      <nav>
        <ul>
          <li>
            <div className={styles.username}>
              <p>John</p>
            </div>
          </li>
          <div className={styles.icons}>
            <li>
              <FontAwesomeIcon
                className={styles.dashboard_icon}
                icon={faTableColumns}
              />
            </li>
            <li>
              <FontAwesomeIcon
                className={styles.dashboard_icon}
                icon={faChartLine}
              />
            </li>
            <li>
              <FontAwesomeIcon
                className={styles.dashboard_icon}
                icon={faGear}
              />
            </li>
            <li>
              <a href="/logout" onClick={() => logoutUser()}>
                {" "}
                <FontAwesomeIcon
                  className={styles.dashboard_icon}
                  icon={faArrowRightFromBracket}
                />
              </a>
            </li>
          </div>
        </ul>
      </nav>
      <h1 className={styles.mobile_h1}>Dashboard</h1>
      <div className={styles.create_ticket_button_wrapper}>
        {/* <div className="modal-wrapper"></div> */}
        <button onClick={() => setIsModalOpened(true)}>
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
        isUpdatingTicket={isUpdatingTicket}
        createTicket={createTicket}
        ticketName={ticketName}
        setTicketName={setTicketName}
        ticketDescription={ticketDescription}
        setTicketDescription={setTicketDescription}
        setTicketPriority={setTicketPriority}
        ticketPriority={ticketPriority}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
      />
      <div className={styles.bottom_paragraph_wrapper}>
        <p className={styles.bottom_paragraph}>
          created by{" "}
          <a href="https://github.com/mclbdn/" target="_blank" rel="noreferrer">
            @mclbdn
          </a>
        </p>
      </div>
    </main>
  );
};

export default Dashboard;
