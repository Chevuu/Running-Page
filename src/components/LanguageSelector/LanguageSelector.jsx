import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./LanguageSelector.module.css";

export default function LanguageSelector() {
    const { i18n } = useTranslation();

    const languages = [
        { code: "en", label: "EN" },
        { code: "sr", label: "SR" },
        { code: "nl", label: "NL" },
    ];

    const handleChange = (e) => {
        i18n.changeLanguage(e.target.value);
    };

    return (
        <select
            className={styles.select}
            onChange={handleChange}
            value={i18n.language}
        >
            {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                    {lang.label}
                </option>
            ))}
        </select>
    );
}