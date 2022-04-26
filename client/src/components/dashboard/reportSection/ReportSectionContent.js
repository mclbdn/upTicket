import React, { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { useSelector, useDispatch } from "react-redux";

const ReportSectionContent = () => {
  const [ticketsFromLast7Days, setTicketsFromLast7days] = useState(null);
  const companyId = useSelector((state) => state.companyId);
  
  async function getTicketsFromLast7days() {
    try {
      const response = await fetch(`https://upticket.herokuapp.com/api/reports/last7daystickets?companyId=${companyId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Method": "DELETE, POST, GET, OPTIONS",
          "ccess-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With",
          "x-access-token": localStorage.getItem("token"),
        },
      });

      const data = await response.json();
      setTicketsFromLast7days(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    async function fetchData() {
      if (companyId) {
        await getTicketsFromLast7days();
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <h1>Reports</h1>
      {ticketsFromLast7Days && (
        <BarChart
          width={1000}
          height={300}
          data={ticketsFromLast7Days}
          margin={{
            top: 10,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="numOfTickets" fill="#8884d8" />
        </BarChart>
      )}
    </>
  );
};

export default ReportSectionContent;
