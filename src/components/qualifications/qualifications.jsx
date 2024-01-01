// Qualifications.js

import React from "react";
import img from "../props/Nodejs.png";
import img1 from "../props/react.png";
import img2 from "../props/js.png";
import img3 from "../props/Tailwind.png";
import img4 from "../props/mongo.png";
import img5 from "../props/html.png";
import img6 from "../props/css.png";
import img7 from "../props/express.png";
import img8 from "../props/boot.png";
import img9 from "../props/git.png";

import "./qualifications.css";

const qualifications = () => {
  return (
    <section className="qualifications-section">
      <h2 className="section-title">My Skills</h2>
      <div className="qualification-container">
        <div className="qualification-card">
          <img
            src={img2}
            alt="JavaScript Icon"
            className="qualification-icon"
          />
        </div>

        <div className="qualification-card">
          <img src={img} alt="Node.js Icon" className="qualification-icon" />
        </div>

        <div className="qualification-card">
          <img src={img1} alt="React Icon" className="qualification-icon" />
        </div>

        <div className="qualification-card">
          <img src={img3} alt="Tailwind Icon" className="qualification-icon" />
        </div>

        <div className="qualification-card">
          <img src={img4} alt="MongoDB Icon" className="qualification-icon" />
        </div>

        <div className="qualification-card">
          <img src={img5} alt="html Icon" className="qualification-icon" />
        </div>

        <div className="qualification-card">
          <img src={img6} alt="css Icon" className="qualification-icon" />
        </div>

        <div className="qualification-card">
          <img src={img7} alt="Express Icon" className="qualification-icon" />
        </div>

        <div className="qualification-card">
          <img src={img8} alt="Bootstrap Icon" className="qualification-icon" />
        </div>

        <div className="qualification-card">
          <img src={img9} alt="Git Icon" className="qualification-icon" />
        </div>

        {/* Add more qualification cards for other technologies */}
      </div>
    </section>
  );
};

export default qualifications;
