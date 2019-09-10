import React from "react";
import "./search.css";

import Toggle from "./Toggle";

const testButtons = [
  { label: "RFI", index: 1 },
  { label: "CC", index: 2 },
  { label: "3BET", index: 3 },
  { label: "4BET", index: 4 }
];

const testButtons2 = [
  { label: "UTG", index: 1 },
  { label: "MP", index: 2 },
  { label: "CO", index: 3 },
  { label: "BTN", index: 4 },
  { label: "SB", index: 5 },
  { label: "BB", index: 6 }
];

const testButtons3 = [
  { label: "A", index: 1 },
  { label: "K", index: 2 },
  { label: "Q", index: 3 },
  { label: "J", index: 4 },
  { label: "T", index: 5 },
  { label: "9", index: 6 },
  { label: "8", index: 7 },
  { label: "7", index: 8 },
  { label: "6", index: 9 },
  { label: "5", index: 10 },
  { label: "4", index: 11 },
  { label: "3", index: 12 },
  { label: "2", index: 13 }
];

class Search extends React.Component<any, any> {
  render() {
    return (
      <div className="search-container">
        <Toggle
          label="Preflop action:"
          initialIndex={1}
          onToggle={(i: number) => {}}
          buttons={testButtons}
        />
        <Toggle
          label="Preflop position:"
          initialIndex={1}
          onToggle={(i: number) => {}}
          buttons={testButtons2}
        />
        <Toggle
          label="Filter by card:"
          initialIndex={1}
          onToggle={(i: number) => {}}
          buttons={testButtons3}
        />
      </div>
    );
  }
}

export default Search;
