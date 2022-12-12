// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Landing from './pages/Landing';
import Org from "./pages/org"

function App() {
  return (
    <>
      <Router>
      <div className="flex-column justify-center align-center min-100-vh">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/testing' element= {<Landing />} />
          <Route path="/Organization/:orgId" element={<Org/>} />
        </Routes>
      </div>
    </Router>
    </>
    
  );
}

export default App;
