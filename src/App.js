import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Nav } from "./component/Nav"; 


const App = () => {
  return (
    <Router>
      {/* Ensure the page scrolls to the top when navigating */}

      {/* Navigation Bar */}
      <Nav />

      {/* Routes */}
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />


 
      </Routes>
    </Router>
  );
};

export default App;
