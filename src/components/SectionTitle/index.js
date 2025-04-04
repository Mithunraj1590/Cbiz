"use client"
import React, { useEffect, useState } from "react";

const SectionTitle = ({ className, children, inline, tag: initialTag = "h2" }) => {
  
  const [tag, setTag] = useState(initialTag);
  useEffect(() => {
    setTag(initialTag);
  }, [initialTag]);

  const Tag = tag;

  return (
    <Tag
      className={`title ${className ? className : ""} ${
        inline ? "inline" : ""
      }`}
    >
      {children}
    </Tag>
  );
};

export default SectionTitle;
