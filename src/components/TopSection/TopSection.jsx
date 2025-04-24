import React from "react";
import styles from "./TopSection.module.css";
import LoadingBar from "../LoadingBar/LoadingBar";

export default function TopSection({ progress }) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.gradient} />
            <LoadingBar progress={progress} />
        </div>
    );
}