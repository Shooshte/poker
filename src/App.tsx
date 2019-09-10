import React from "react";
import "./App.css";

import CardMatrix from "./components/CardMatrix";

import strategyHands from "./data/strategyHands.json";

import { Position } from "./types/types";

const App: React.FC = () => {
  return <CardMatrix hands={(strategyHands as Position[])[0].hands.RFI} />;
};

export default App;
