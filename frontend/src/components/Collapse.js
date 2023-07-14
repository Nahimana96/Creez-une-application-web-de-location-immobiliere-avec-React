import React, { useState } from "react";

const Collapse = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse-container ${isOpen ? "open" : "closed"}`}>
      <div className="click-section">
        <h1 className="title">{props.title}</h1>
        <i
          className={`fa-solid fa-chevron-up ${isOpen ? "rotate" : ""}`}
          onClick={toggleCollapse}
        ></i>
      </div>
      <div className="collapse">{props.content}</div>
    </div>
  );
};

export default Collapse;
