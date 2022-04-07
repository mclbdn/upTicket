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
import { setCompanyName, setCompanyId } from "../redux/actions";

const Dashboard = () => {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState(false);
  const [isMainContent, setIsMainContent] = useState(true);

  // REDUX
  const dispatch = useDispatch();
  const companyId = useSelector((state) => state.companyId);
  // REDUX

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
      dispatch(setCompanyId(data.company_id));
    } else {
      navigate("/login");
    }
  }

  // Check if token was provided, thus user can see the dashboard
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
      <Modal />
      <SmallScreenBottomParagraphWrapper />
    </main>
  );
};

export default Dashboard;
