import React, { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { setCompanyName, setCompanyId } from "../redux/actions";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isMainContent = useSelector((state) => state.isMainContent);

  async function verifyTokenToLogin() {
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
      dispatch(setCompanyId(data.company_id));
    } else {
      navigate("/login");
    }
  }

  // Check if token was provided so user can see the dashboard. If not, redirect him to log in
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const user = jwtDecode(token);
      if (!user) {
        localStorage.removeItem("token");
        navigate("/login");
      } else {
        verifyTokenToLogin();
      }
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <main className={styles.dashboard}>
      <TopContainer />
      <LeftMenu>
        <BiggerScreenBottomParagraphWrapper />
      </LeftMenu>
      <OffWhiteContainer>
        {isMainContent && <BiggerScreenSizeMainContent />}
      </OffWhiteContainer>
      <SmallScreenTopMenu />
      {isMainContent && <SmallScreenMainContent />}
      <Modal />
      <SmallScreenBottomParagraphWrapper />
    </main>
  );
};

export default Dashboard;
