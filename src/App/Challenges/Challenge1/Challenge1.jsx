import React, { useState } from "react";
import "./Challenge1.css";

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
