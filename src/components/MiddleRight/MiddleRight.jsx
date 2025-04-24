import React, { useState } from "react";
import styles from "./MiddleRight.module.css";
import Button from "../SharedButton/Button";

export default function MiddleRight() {
    const [active, setActive] = useState(null);
    const anyActive = Boolean(active);

    const toggle = (panel) =>
        setActive((prev) => (prev === panel ? null : panel));

    const size = anyActive ? "small" : "large";

    return (
        <div
            className={`${styles.container} ${active === "donate"
                    ? styles.donateActive
                    : active === "info"
                        ? styles.infoActive
                        : ""
                }`}
        >
            {/* ── Donate Panel ───────────────── */}
            <div className={styles.topRed}>
                {active === "donate" ? (
                    <div className={styles.btnList}>
                        <Button size="small">Tikkie</Button>
                        <Button size="small">Paypal</Button>
                        <Button size="small">Revolut</Button>
                    </div>
                ) : (
                    <Button size={size} onClick={() => toggle("donate")}>
                        Donate
                    </Button>
                )}
            </div>

            {/* ── Info Panel ─────────────────── */}
            <div className={styles.bottomRed}>
                {active === "info" ? (
                    <div className={styles.btnList}>
                        <Button size="small">Info 1</Button>
                        <Button size="small">Info 2</Button>
                        <Button size="small">Info 3</Button>
                    </div>
                ) : (
                    <Button size={size} onClick={() => toggle("info")}>
                        Info
                    </Button>
                )}
            </div>
        </div>
    );
}