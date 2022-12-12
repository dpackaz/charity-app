// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Login from "./pages/user/Login.js";
import Signup from "./pages/user/Signup.js";

function App() {
  return (
    <>
      <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/testing" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
