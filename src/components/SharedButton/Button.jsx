import React from "react";
import styles from "./Button.module.css";
import clsx from "clsx";

export default function Button({ size = "large", ...props }) {
  return (
    <button
      {...props}
      className={clsx(size === "small" ? styles.small : styles.large, props.className)}
    />
  );
}