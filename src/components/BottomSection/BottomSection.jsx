import React from "react";
import Box from "../Box/Box";
import styles from "./BottomSection.module.css";

export default function BottomSection() {
    return (
        <div className={styles.row}>
            <Box color="green" />
            <Box color="yellow" />
            <Box color="darkblue" />
            <Box color="red" />
        </div>
    );
}