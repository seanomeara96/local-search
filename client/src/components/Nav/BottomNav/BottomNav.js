import React from "react";
import { Link } from "react-router-dom";
import styles from "./BottomNav.module.css";
const BottomNav = () => {
  return (
    <div className={styles.menu}>
      <Link to="/" className="item">
        <i className="user outline icon"></i>
      </Link>
      <Link to="/" className="item">
        <i className="search icon"></i>
      </Link>
      <Link to="/" className="item">
        <i className="heart outline icon"></i>
      </Link>
    </div>
  );
};
export default BottomNav;
