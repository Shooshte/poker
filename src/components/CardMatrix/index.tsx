import React from "react";
import HoleCards from "../HoleCards";

import { HandsPosition } from "../../types/types";

import "./cardMatrix.css";

interface Props {
  hands?: HandsPosition;
}

const CardMatrix: React.FC<Props> = ({ hands }) => {
  return (
    <div className="card-matrix">
      {hands ? (
        <React.Fragment>
          {hands.pair && (
            <div className="card-matrix-row">
              <div className="card-matrix-row-heading">Pairs:</div>
              <div className="card-matrix-cards">
                {hands.pair.map(hand => (
                  <HoleCards
                    type="pair"
                    suited={hand.suited}
                    rainbow={hand.rainbow}
                    cards={hand.cards}
                    key={hand._id}
                  />
                ))}
              </div>
            </div>
          )}
          {hands.connector && (
            <div className="card-matrix-row">
              <div className="card-matrix-row-heading">Connectors:</div>
              <div className="card-matrix-cards">
                {hands.connector.map(hand => (
                  <HoleCards
                    type="connector"
                    suited={hand.suited}
                    rainbow={hand.rainbow}
                    cards={hand.cards}
                    key={hand._id}
                  />
                ))}
              </div>
            </div>
          )}
          {hands.other && (
            <div className="card-matrix-row">
              <div className="card-matrix-row-heading">Others:</div>
              <div className="card-matrix-cards">
                {hands.other.map(hand => (
                  <HoleCards
                    type="other"
                    suited={hand.suited}
                    rainbow={hand.rainbow}
                    cards={hand.cards}
                    key={hand._id}
                  />
                ))}
              </div>
            </div>
          )}
        </React.Fragment>
      ) : (
        "No hands to display."
      )}
    </div>
  );
};

export default CardMatrix;
