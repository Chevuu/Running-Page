import React from "react";
import Box from "../Box/Box";
import styles from "./MiddleLeft.module.css";

export default function MiddleLeft() {
    return (
        <div className={styles.column}>
            <Box color="black" fontSize="1.2rem" fontColor="#fff">
                BENELUX RUNNING FOR
            </Box>

            <Box color="black" fontSize="6vw" fontColor="#ffe0c4">
                STUDENTS<br />IN<br />SERBIA
            </Box>

            <div className={styles.smallRow}>
                <Box color="yellow" fontSize="0.9rem" fontColor="#000">
                    9/5 – 11/5
                </Box>
                <Box color="darkblue" fontSize="0.9rem" fontColor="#fff">
                    ~XXX km
                </Box>
            </div>
        </div>
    );
}