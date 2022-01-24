import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./page/mainPage";
import StatisticsPage from "./page/statisticsPage";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/statistics" element={<StatisticsPage />} />
      </Routes>
    </>
  );
}

export default App;
