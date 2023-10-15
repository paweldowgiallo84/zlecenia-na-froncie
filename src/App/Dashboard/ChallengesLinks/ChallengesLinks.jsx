import React from "react";
import './ChallengesLinks.css'

import { Data } from "./Data";
import { SingleChallenge } from "./SingleChallenge";

export const ChallengesLinks = () => {
  return (
    <div className="challengesLinks">
      {Data.map((challenge) => {
        return (
          <SingleChallenge
            key={challenge.title}
            title={challenge.title}
            description={challenge.description}
            link={challenge.link}
          />
        );
      })}
    </div>
  );
};
