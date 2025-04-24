import React from "react";
import styles from "./TopSection.module.css";
import LoadingBar from "../LoadingBar/LoadingBar";
import LanguageSelector from "../LanguageSelector/LanguageSelector";

export default function TopSection({ progress }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.gradient} />

      <div className={styles.languageBox}>
        <LanguageSelector />
      </div>

      <LoadingBar progress={progress} />
    </div>
  );
}