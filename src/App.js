import React from "react";
import styles from "./App.module.css";

import TopSection from "./components/TopSection/TopSection";
import MiddleLeft from "./components/MiddleLeft/MiddleLeft";
import MiddleRight from "./components/MiddleRight/MiddleRight";
import BottomSection from "./components/BottomSection/BottomSection";

import logo from "./assets/logo.png";

export default function App() {
  /* example live value – replace with Strava etc. */
  const progress = 65;

  return (
    <>
      <img src={logo} className={styles.logo} alt="Logo" />

      <div className={styles.grid}>
        <div className={styles.top}>
          <TopSection progress={progress} />
        </div>

        <div className={styles.middle}>
          <MiddleLeft />
          <MiddleRight />
        </div>

        <div className={styles.bottom}>
          <BottomSection />
        </div>
      </div>
    </>
  );
}