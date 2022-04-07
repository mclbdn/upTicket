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
  setTickets,
} from "../redux/actions";

const Dashboard = () => {
  const navigate = useNavigate();
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

      dispatch(setTickets(data["tickets"]));
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
        setIsMainContent={setIsMainContent}
        isMainContent={isMainContent}
      >
        <BiggerScreenBottomParagraphWrapper />
      </LeftMenu>
      <OffWhiteContainer>
        {isMainContent && <BiggerScreenSizeMainContent mobile={mobile} />}
      </OffWhiteContainer>
      <SmallScreenTopMenu
        setIsMainContent={setIsMainContent}
        isMainContent={isMainContent}
      />
      {isMainContent && <SmallScreenMainContent mobile={mobile} />}
      <Modal
        handleCloseBtn={() => {
          handleCloseBtn();
        }}
      />
      <SmallScreenBottomParagraphWrapper />
    </main>
  );
};

export default Dashboard;
