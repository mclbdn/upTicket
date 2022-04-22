import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Homepage from "./pages/Homepage";
import LogoutPage from "./pages/LogoutPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./styles/_base.scss";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/logout" element={<LogoutPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
