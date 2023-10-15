import React, { useState } from "react";
import "./Challenge1.css";

import interiors from "./images/interior-design.png";
import brand from "./images/handing-a-cup.png";
import visual from "./images/ball-on-grid.png";
import animation from "./images/fire.png";
import bunch from "./images/flowers.png";
import rumors from "./images/exhibition.png";

import { LinksData } from "./LinksData";

export const Challenge1 = () => {
  const [mouseOver, setMouseOver] = useState(null);

  const handleMouseOver = (image) => {
    setMouseOver(image);
  };

  const handleMouseLeve = () => {
    setMouseOver(null);
  };

  return (
    <div className="challenge1">
      <div className="challenge1__wrapper">
        {LinksData.map((links) => {
          return (
            <a
              key={links.id}
              onMouseEnter={() => handleMouseOver(`${links.title}`)}
              onMouseLeave={handleMouseLeve}
              href="#"
            >
              <sup>{links.id}</sup>
              {links.title}
              {mouseOver === `${links.title}` ? (
                <img
                  style={{ top: `${links.top}vh`, left: `${links.left}vw` }}
                  src={links.img}
                  alt={links.alt}
                  className="mouse__over__img"
                />
              ) : null}
            </a>
          );
        })}
      </div>
    </div>
  );
};
