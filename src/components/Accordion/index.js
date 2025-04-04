"use client";

import { useRef } from "react";
import styles from "./Accordian.module.scss"; 
import Icons from "@/styles/Icons";

const Accordion = ({ title, content, isOpen, toggleAccordion, index,type }) => {
  const contentRef = useRef(null);

  return (
    <div className={`${styles.accordion} ${isOpen ? styles.open : ""} `}>
      <button className={styles.accordion_header} onClick={() => toggleAccordion(index)}>
        <div><span>{type === "home" && (`${index + 1}.`)} </span>{title}</div>
        <span className={`${styles.icon} ${isOpen ? styles.rotated : ""}`}>
          <Icons size={20}  icon="arrow-right" />
        </span>
      </button>
      <div
        ref={contentRef}
        className={styles.accordion_content}
        style={{ maxHeight: isOpen ? `${(contentRef.current?.scrollHeight || 0) + 10}px` : "0px" }}
      >
        <div className={styles.accordion_body}>{content}</div>
      </div>
    </div>
  );
};

export default Accordion;
