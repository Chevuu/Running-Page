import React, { useState } from "react";
import styles from "./App.module.css";

import TopSection from "./components/TopSection/TopSection";
import MiddleLeft from "./components/MiddleLeft/MiddleLeft";
import MiddleRight from "./components/MiddleRight/MiddleRight";
import BottomSection from "./components/BottomSection/BottomSection";

import logo from "./assets/logo.png";

export default function App() {
  const [mode, setMode] = useState("normal");   // "normal" | "donate"
  const progress = 65;

  return (
    <>
      <img src={logo} className={styles.logo} alt="Logo" />

      <div className={styles.grid}>
        <div className={styles.top}>
          <TopSection progress={progress} />
        </div>

        <div className={`${styles.middle} ${mode === "donate" ? styles.donateMode : ""}`}>
          <MiddleLeft isShrinking={mode === "donate"} />
          <MiddleRight mode={mode} setMode={setMode} />
        </div>

        <div className={styles.bottom}>
          <BottomSection />
        </div>
      </div>
    </>
  );
}