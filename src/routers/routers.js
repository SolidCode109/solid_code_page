import Header from "@/components/Header/Header";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



const MyRoutes = () => {
    return (
      <Router>
        <Header />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Router>
    );
  };
  
  export default MyRoutes;