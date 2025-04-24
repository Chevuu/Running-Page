import React from "react";
import { useTranslation } from "react-i18next";
import Box from "../Box/Box";
import styles from "./MiddleLeft.module.css";

export default function MiddleLeft({ isShrinking }) {
    const { t } = useTranslation();

    return (
        <div className={`${styles.column} ${isShrinking ? styles.slideOut : ""}`}>
            <Box color="black" fontSize="1.2rem" fontColor="#fff">
                {t("16RunningFor")}
            </Box>

            {/* — big number — */}
            <Box
                color="black"
                fontSize="20vh"
                fontColor="#ffe0c4"
                className={styles.bigNumber}
            >
                16
            </Box>

            <div className={styles.smallRow}>
                <Box color="yellow" fontSize="0.9rem" fontColor="#000">
                    25/4 – 12/5
                </Box>
                <Box color="darkblue" fontSize="0.9rem" fontColor="#fff">
                    2000 km
                </Box>
            </div>
        </div>
    );
}