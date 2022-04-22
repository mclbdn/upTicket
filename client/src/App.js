import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Homepage from "./pages/Homepage";
// import LogInPage from "./pages/LogInPage";
// import LogIn from "./pages/NewLogIn";
import LogoutPage from "./pages/LogoutPage";
import SignUp from "./pages/SignUp";
import "./styles/_base.scss";
import NewLogIn from "./pages/NewLogIn";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<NewLogIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/logout" element={<LogoutPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
