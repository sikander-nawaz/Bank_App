import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";

const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<>Page Not page</>} />
    </Routes>
  );
};

export default Index;
