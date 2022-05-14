import React, { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useSelector } from "react-redux";
import styles from "./SmallReportSectionContent.module.scss";

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
    <main>
      <div className={styles.chart_container}>
        {ticketsFromLast7Days && (
          <ResponsiveContainer width="100%" height="50%">
            <BarChart
              data={ticketsFromLast7Days}
              margin={{
                top: 0,
                right: 30,
                left: 0,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" stroke="#FE85FF" />
              <YAxis stroke="#FE85FF" />
              <Tooltip wrapperStyle={{ color: "#FE85FF" }} />
              <Legend />
              <Bar dataKey="numOfTickets" fill="#86FF85" stroke="#FE85FF" />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </main>
  );
};

export default ReportSectionContent;
