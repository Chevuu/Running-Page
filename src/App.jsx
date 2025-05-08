import React from "react";
import { Routes, Route } from "react-router-dom";
import styles from "./App.module.css";

import TopSection from "./components/TopSection/TopSection";
import BottomSection from "./components/BottomSection/BottomSection";
import HomePage from "./pages/HomePage/HomePage";
import DonatePage from "./pages/DonatePage/DonatePage";

import logo from "./assets/logo.png";

export default function App() {
  return (
    <>
      <img src={logo} className={styles.logo} alt="Logo" />
      <div className={styles.grid}>
        <div className={styles.top}>
          <TopSection progress={65} />
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/donate" element={<DonatePage />} />
        </Routes>

        <div className={styles.bottom}>
          <BottomSection />
        </div>
      </div>
    </>
  );
}