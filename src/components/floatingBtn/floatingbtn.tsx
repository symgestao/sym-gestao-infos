// Floatingbtn.js
import React from "react";
import "./floatingbtn.css";

export function Floatingbtn() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="floating-btn" onClick={scrollToTop}>
      <span className="arrow-up">&#9650;</span>
    </div>
  );
}
