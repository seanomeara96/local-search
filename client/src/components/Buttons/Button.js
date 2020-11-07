import React from "react";
import styles from "./Button.module.css";
const Button = (props) => {
  return (
    <button
      className={`${styles.button} ${
        styles[props.modifier] ? styles[props.modifier] : ""
      }`}
    >
      {props.children}
    </button>
  );
};

export default Button;
