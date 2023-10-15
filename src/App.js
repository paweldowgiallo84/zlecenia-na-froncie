import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "./App/Dashboard/Dashboard";

import { Challenge1 } from "./App/Challenges/Challenge1/Challenge1";
import { Challenge2 } from "./App/Challenges/Challenge2/Challenge2";
import { Challenge3 } from "./App/Challenges/Challenge3/Challenge3";
import { Challenge4 } from "./App/Challenges/Challenge4/Challenge4";
import { Challenge5 } from "./App/Challenges/Challenge5/Challenge5";
import { Challenge6 } from "./App/Challenges/Challenge6/Challenge6";
import { Challenge7 } from "./App/Challenges/Challenge7/Challenge7";
import { Challenge8 } from "./App/Challenges/Challenge8/Challenge8";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Dashboard} exact />
          <Route path="/challenge1" Component={Challenge1} />
          <Route path="/challenge2" Component={Challenge2} />
          <Route path="/challenge3" Component={Challenge3} />
          <Route path="/challenge4" Component={Challenge4} />
          <Route path="/challenge5" Component={Challenge5} />
          <Route path="/challenge6" Component={Challenge6} />
          <Route path="/challenge7" Component={Challenge7} />
          <Route path="/challenge8" Component={Challenge8} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
