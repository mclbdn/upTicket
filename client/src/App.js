import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";
import "./styles/_main.scss"

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LogInPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
