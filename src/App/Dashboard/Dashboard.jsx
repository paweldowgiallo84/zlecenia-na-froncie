import React from "react";

import nerdboardIcon from "../images/nerdboard_icon.svg";
import { ChallengesLinks } from "./ChallengesLinks/ChallengesLinks";

export const Dashboard = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Zlecenia na Froncie</h1>
        <a href="https://nerdbord.io/board" target="blank">
          <img src={nerdboardIcon} alt="nerdboard web page" />
        </a>
      </header>
      <main className="App-main">
       <ChallengesLinks/>
      </main>
    </div>
  );
};
