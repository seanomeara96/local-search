import React from "react";
import styles from "./PageSection.module.css";
const PageSection = (props) => (
  <section className={styles.pageSection}>{props.children}</section>
);

export default PageSection;
