import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Button from "../SharedButton/Button";
import styles from "./MiddleRight.module.css";

export default function MiddleRight({ mode, setMode }) {
    const { t } = useTranslation();
    const nav = useNavigate();

    return (
        <div className={`${styles.container} ${mode === "donate" ? styles.donateMode : ""}`}>
            {/* ─── upper red panel ─── */}
            <div className={styles.topRed}>
                {mode === "donate" ? (
                    <>
                        <div className={styles.splitButton}>
                            <Button size="large" bold onClick={() => nav("/donate")}>
                                {t("donateToStudents")}
                            </Button>
                        </div>

                        <div className={styles.splitButton}>
                            <Button size="large" bold>{t("localDonations")}</Button>
                        </div>

                        <button className={styles.backArrow} onClick={() => setMode("normal")}>←</button>
                    </>
                ) : (
                    <Button
                        size="largeBig"
                        bold
                        onClick={() => setMode("donate")}
                        className={styles.primaryDonate}
                    >
                        {t("donate")}
                    </Button>
                )}
            </div>

            {/* ─── lower panel ─── */}
            <div className={styles.bottomRed}>
                {mode === "normal" && (
                    <a
                        className={styles.infoBtn}
                        href="https://trkadobrisela.rs/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {t("info")}
                    </a>
                )}
            </div>
        </div>
    );
}