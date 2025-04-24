import React from "react";
import styles from "./Box.module.css";
import clsx from "clsx";               // optional helper

export default function Box({
    color,
    fontSize,
    fontColor,
    className = "",
    style = {},
    children,
}) {
    const mergedStyle = { ...style };
    if (fontSize) mergedStyle.fontSize = fontSize;
    if (fontColor) mergedStyle.color = fontColor;

    return (
        <div
            className={clsx(styles.box, styles[color], className)}
            style={mergedStyle}
        >
            {children}
        </div>
    );
}