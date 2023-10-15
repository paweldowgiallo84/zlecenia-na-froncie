import React from "react";
import "./SingleChallenge.css";
import { Link } from "react-router-dom";

export const SingleChallenge = ({ title, description, link }) => {
  return (
    <div className="singleChallenge">
      <h2 className="challengeTitle">{title}</h2>
      <p className="chalengeDescription">{description}</p>
      <Link to={link} className="challengeBtn">
        Otwórz
      </Link>
    </div>
  );
};
