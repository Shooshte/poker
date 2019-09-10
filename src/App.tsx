import React from "react";
import "./App.css";

import CardMatrix from "./components/CardMatrix";
import Search from "./components/Search";

import strategyHands from "./data/strategyHands.json";

import { Position, Card, PreflopAction, PreflopPosition } from "./types/types";

interface State {
  cardsFilter: Card[];
  preflopAction: PreflopAction;
  preflopPosition: PreflopPosition;
}

class App extends React.Component<any, State> {
  render() {
    return (
      <React.Fragment>
        <CardMatrix hands={(strategyHands as Position[])[0].hands.RFI} />
        <Search />
      </React.Fragment>
    );
  }
}

export default App;
