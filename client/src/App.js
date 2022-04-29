import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Api from "./pages/Api";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Docs from "./pages/Docs";
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
          <Route path="/docs" element={<Docs />} />
          <Route path="/api" element={<Api />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
