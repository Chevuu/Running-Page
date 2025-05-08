import React, { useState } from "react";
import styles from "./HomePage.module.css";
import MiddleLeft from "../../components/MiddleRight/MiddleRight"
import MiddleRight from "../../components/MiddleRight/MiddleRight";

export default function HomePage() {
  const [mode, setMode] = useState("normal");        // normal | donate

  return (
    <div className={`${styles.middle} ${mode === "donate" ? styles.donateMode : ""}`}>
      <MiddleLeft isShrinking={mode === "donate"} />
      <MiddleRight mode={mode} setMode={setMode} />
    </div>
  );
}