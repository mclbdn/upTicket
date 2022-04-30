import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound404 from "./pages/NotFound404";
import Dashboard from "./pages/Dashboard";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
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
          <Route path="/logout" element={<Logout />} />
          <Route path="/docs" element={<NotFound404 />} />
          <Route path="/api" element={<NotFound404 />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
