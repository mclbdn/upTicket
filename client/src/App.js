import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Homepage from "./pages/Homepage";
import LogInPage from "./pages/LogInPage";
import LogoutPage from "./pages/LogoutPage";
// import SignUpPage from "./pages/SignUpPage";
import NewSignUpPage from "./pages/NewSignUpPage";
import "./styles/_base.scss";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/signup" element={<SignUpPage />} /> */}
          <Route path="/signup" element={<NewSignUpPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/logout" element={<LogoutPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
