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
import ReportSectionContent from "../components/dashboard/reportSection/ReportSectionContent";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isMainContent = useSelector((state) => state.isMainContent);

  async function verifyTokenToLogin() {
    const response = await fetch("https://upticket.herokuapp.com/api/ticket/companyDetails", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });

    const data = await response.json();
    
    if (response.status === 200) {
      dispatch(setCompanyName(data.companyName));
      dispatch(setCompanyId(data.companyId));
    } else {
      navigate("/login");
    }
  }

  // Check if token was provided so user can see the dashboard. If not, redirect them to log in
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
      <OffWhiteContainer>{isMainContent ? <BiggerScreenSizeMainContent /> : <ReportSectionContent />}</OffWhiteContainer>
      <SmallScreenTopMenu />
      {isMainContent && <SmallScreenMainContent />}
      <Modal />
      <SmallScreenBottomParagraphWrapper />
    </main>
  );
};

export default Dashboard;
