import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import auth_routes from "./routes/auth.routes";
import ticket_routes from "./routes/ticket.routes";
import report_routes from "./routes/report.routes";

mongoose.connect("mongodb+srv://mclbdn:Miminitos1.@cluster0.zgee6.mongodb.net/upticket?retryWrites=true&w=majority");

const app: Express = express();

app.use(cors());
app.use(express.json());

app.use(auth_routes);
app.use(ticket_routes);
app.use(report_routes);

app.listen(process.env.PORT || 5500, () => {
  console.log("The server is running");
});
