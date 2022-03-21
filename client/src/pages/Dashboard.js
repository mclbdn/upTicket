import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState("");

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
    console.log(response)
    if (response.status === 200) {
      navigate("/")
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
    </div>
  );
};

export default Dashboard;
