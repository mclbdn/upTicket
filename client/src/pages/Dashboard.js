import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import Modal from "../components/dashboard/ticketSection/Modal";
import TopContainer from "../components/dashboard/TopContainer";
import LeftMenu from "../components/dashboard/LeftMenu";
import styles from "./Dashboard.module.scss";
import OffWhiteContainer from "../components/dashboard/OffWhiteContainer";
import SmallScreenBottomParagraphWrapper from "../components/dashboard/SmallScreenBottomParagraphWrapper";
import BiggerScreenBottomParagraphWrapper from "../components/dashboard/BiggerScreenBottomParagraphWrapper";
import SmallScreenTopMenu from "../components/dashboard/SmallScreenTopMenu";
import BiggerScreenSizeMainContent from "../components/dashboard/ticketSection/BiggerScreenSizeMainContent";
import SmallScreenMainContent from "../components/dashboard/ticketSection/SmallScreenMainContent";
import { useSelector, useDispatch } from "react-redux";
import {
  setCompanyName,
  setCompanyId,
  setTicketName,
  setIsModalShown,
  setTicketDescription,
  setTicketPriority,
  setIsUpdatingTicket,
  setActiveTicketId,
} from "../redux/actions";

const Dashboard = () => {
  const navigate = useNavigate();
  const [tickets, setTickets] = useState(null);
  const [mobile, setMobile] = useState(false);
  const [isMainContent, setIsMainContent] = useState(true);

  // REDUX
  const dispatch = useDispatch();
  const companyId = useSelector((state) => state.companyId);
  const ticketName = useSelector((state) => state.ticketName);
  const ticketDescription = useSelector((state) => state.ticketDescription);
  const ticketPriority = useSelector((state) => state.ticketPriority);
  const activeTicketId = useSelector((state) => state.activeTicketId);
  // REDUX

  const handleCloseBtn = () => {
    dispatch(setIsModalShown(false));
    dispatch(setTicketName(""));
    dispatch(setTicketDescription(""));
    dispatch(setTicketPriority(""));
    dispatch(setIsUpdatingTicket(false));
    dispatch(setActiveTicketId(""));
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
      dispatch(setCompanyName(data.company));
      // setCompanyId(data.company_id);
      dispatch(setCompanyId(data.company_id));
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
    if (window.innerWidth < 768) {
      setMobile(true);
    } else {
      setMobile(false);
    }

    const updateMedia = () => {
      if (window.innerWidth < 768) {
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
      <TopContainer />
      <LeftMenu
        logoutUser={logoutUser}
        setIsMainContent={setIsMainContent}
        isMainContent={isMainContent}
      >
        <BiggerScreenBottomParagraphWrapper />
      </LeftMenu>
      <OffWhiteContainer>
        {isMainContent && (
          <BiggerScreenSizeMainContent
            mobile={mobile}
            tickets={tickets}
          />
        )}
      </OffWhiteContainer>
      <SmallScreenTopMenu
        logoutUser={logoutUser}
        setIsMainContent={setIsMainContent}
        isMainContent={isMainContent}
      />
      {isMainContent && (
        <SmallScreenMainContent
          mobile={mobile}
          tickets={tickets}
        />
      )}
      <Modal
        handleCloseBtn={() => {
          handleCloseBtn();
        }}
        createTicket={createTicket}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
      />
      <SmallScreenBottomParagraphWrapper />
    </main>
  );
};

export default Dashboard;
