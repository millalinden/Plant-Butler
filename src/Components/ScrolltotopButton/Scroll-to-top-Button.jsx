import React from "react";
import { FaAngleUp } from "react-icons/fa";
import "./Scroll-to-top-Button.css";

const ScrollToTopButton = ({ onClick }) => {
  return (
    <div className={"top-to-btm"} onClick={onClick}>
      <FaAngleUp className="scrollToTop" />
    </div>
  );
};

export default ScrollToTopButton;
