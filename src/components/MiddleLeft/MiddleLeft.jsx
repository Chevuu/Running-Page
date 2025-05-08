import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Box from "../Box/Box";
import styles from "./MiddleLeft.module.css";

/**
 * isShrinking === true ➜
 *   • first 0 – 0.2 s  : text fades to transparent
 *   • after   0.2 s    : text strings are replaced with "" so nothing can re-flow
 */
export default function MiddleLeft({ isShrinking }) {
    const { t } = useTranslation();
    const [textCleared, setTextCleared] = useState(false);

    /* clear the plain strings only *after* the fade finished */
    useEffect(() => {
        if (isShrinking) {
            const id = setTimeout(() => setTextCleared(true), 200);
            return () => clearTimeout(id);
        }
        /* coming back from DONATE view */
        setTextCleared(false);
    }, [isShrinking]);

    /* prepare content only when it’s not cleared */
    const topContent = textCleared
        ? ""
        : (
            <>
                {t("protestInShoes")} <br /> {t("protestInShoes2")}
            </>
        );

    const bottomContent = textCleared
        ? ""
        : (
            <>
                {t("protestInShoes3")} <br /> {t("protestInShoes4")}
            </>
        );

    return (
        <div className={`${styles.column} ${isShrinking ? styles.slideOut : ""}`}>
            {/* ─── top label ─── */}
            <Box
                color="black"
                fontColor="#fff"
                className={`${styles.textTop} ${isShrinking ? styles.fade : ""}`}
            >
                {topContent}
            </Box>

            {/* ─── long description ─── */}
            <Box
                color="black"
                fontColor="#ffe0c4"
                className={`${styles.textBottom} ${isShrinking ? styles.fade : ""}`}
            >
                {bottomContent}
            </Box>

            {/* ─── date + route (horizontal scroll) ─── */}
            <div className={styles.smallRow}>
                <Box
                    color="yellow"
                    fontSize="0.9rem"
                    fontColor="#000"
                    className={styles.smallBox}
                >
                    10/5 – 12/5
                </Box>
                <Box
                    color="darkblue"
                    fontSize="0.9rem"
                    fontColor="#fff"
                    className={styles.smallBox}
                >
                    {t("hagueBrussels")}
                </Box>
            </div>
        </div>
    );
}