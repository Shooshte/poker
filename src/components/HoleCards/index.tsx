import React from "react";
import "./holeCards.css";

import { HandCards, HandType } from "../../types/types";

interface Props {
  type: HandType;
  cards: HandCards;
  suited?: boolean;
  rainbow?: boolean;
}

const HoleCards: React.FC<Props> = props => {
  return (
    <div className="hole-cards-container">
      {props.type === "pair" ? (
        <React.Fragment>
          <div className="hole-card white">{props.cards[0]}</div>
          <div className="hole-card white">{props.cards[1]}</div>
        </React.Fragment>
      ) : props.rainbow ? (
        <React.Fragment>
          <div className="hole-card white">{props.cards[0]}</div>
          <div className="hole-card orange">{props.cards[1]}</div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className="hole-card orange">{props.cards[0]}</div>
          <div className="hole-card orange">{props.cards[1]}</div>
        </React.Fragment>
      )}
    </div>
  );
};

export default HoleCards;
