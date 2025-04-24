import React from "react";
import styles from "./LoadingBar.module.css";
import atomium from "../../assets/atomium.png";

export default function LoadingBar({ progress = 0 }) {
    return (
        <div className={styles.container}>
            <div className={styles.bar} style={{ width: `${progress}%` }} />
            <img src={atomium} className={styles.icon} alt="" />
        </div>
    );
}