import React from "react";
import { useTranslation } from "react-i18next";
import Button from "../SharedButton/Button";
import styles from "./MiddleRight.module.css";

/* logo images */
import revolutLogo from "../../assets/revolut.png";
import tikkieLogo from "../../assets/tikkie.png";
import paypalLogo from "../../assets/paypal.png";

export default function MiddleRight({ mode, setMode }) {
    const { t } = useTranslation();

    /* DRY helper for the three logo buttons */
    const renderLogoButton = ({
        href,
        logo,
        alt,
        width,   // customise per button if you like
        height,
    }) => (
        <div className={styles.splitButton}>
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkReset}
            >
                <Button size="large" bold className={styles.logoBtn}>
                    <img
                        src={logo}
                        alt={alt}
                        style={{
                            "--logo-width": width,
                            "--logo-height": height,
                        }}
                        className={styles.logoImg}
                    />
                </Button>
            </a>
        </div>
    );

    return (
        <div
            className={`${styles.container} ${mode === "donate" ? styles.donateMode : ""
                }`}
        >
            {/* ─── upper red panel ─── */}
            <div className={styles.topRed}>
                {mode === "donate" ? (
                    <>
                        {/* three-way split ─────────────────────────────── */}
                        <div className={styles.splitButtons}>
                            {renderLogoButton({
                                href: "https://revolut.me/vukj",
                                logo: revolutLogo,
                                alt: "Revolut",
                                width: "60%",
                            })}
                            {renderLogoButton({
                                href: "https://tikkie.me/pay/3smr1914hveij9lui4a7",
                                logo: tikkieLogo,
                                alt: "Tikkie",
                                height: "70%",
                            })}
                            {renderLogoButton({
                                href: "https://paypal.me/vukjrsc",
                                logo: paypalLogo,
                                alt: "PayPal",
                                width: "65%",
                            })}
                        </div>

                        {/* back arrow ──────────────────────────────────── */}
                        <button
                            className={styles.backArrow}
                            onClick={() => setMode("normal")}
                            aria-label="Back"
                        >
                            ←
                        </button>
                    </>
                ) : (
                    /* single big DONATE button */
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
                        href="https://sites.google.com/view/holandijauzstudente/home?authuser=0"
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
