import React, { useState } from "react";
import "./card.css";

const Card = () => {
  const [showPopup, setShowPopup] = useState({ show: false, content: "" });

  const handlePopup = (content) => {
    setShowPopup({ show: true, content });
  };

  const closePopup = () => {
    setShowPopup({ show: false, content: "" });
  };

  return (
    <div className="right-card-wrapper">
      <div className="card">
        <h1 className="header">About Me</h1>
        <div
          className="card-item"
          onClick={() => handlePopup("Hobbies/Interests")}
        >
          Hobbies/Interests
        </div>
        <div
          className="card-item"
          onClick={() => handlePopup("Favorite Quotes")}
        >
          Favorite Quotes
        </div>
        <div
          className="card-item"
          onClick={() => handlePopup("Non-technical Skills")}
        >
          Non-technical Skills
        </div>
      </div>
      {showPopup.show && (
        <div className="popup">
          <div className="popup-content">
            <span className="close-btn" onClick={closePopup}>
              &times;
            </span>
            <p>{showPopup.content}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
