import React from "react";

import './MainHeading.css';

export const MainHeading = ({className, title}) => (
  <div className={className}>
    { title.map((title, idx) => (
      <h2 key={idx}>{title}</h2>
    ))}
  </div>
)