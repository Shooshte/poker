export type PreflopPosition = "UTG" | "MP" | "CO" | "BTN" | "SB" | "BB";
export type PreflopAction = "RFI" | "CC" | "3BET" | "4BET";
export type Card =
  | "A"
  | "K"
  | "Q"
  | "J"
  | "T"
  | "9"
  | "8"
  | "7"
  | "6"
  | "5"
  | "4"
  | "3"
  | "2";

export type HandCards = [Card, Card];
export type HandType = "pair" | "connector" | "other";

export interface Hand {
  cards: HandCards;
  _id: string;
  suited?: boolean;
  rainbow?: boolean;
}

export interface HandsPosition {
  pair?: Hand[];
  connector?: Hand[];
  other?: Hand[];
}

export interface Hands {
  RFI?: HandsPosition;
  CC?: HandsPosition;
  "3BET"?: HandsPosition;
  "4BET"?: HandsPosition;
  SB?: HandsPosition;
  BB?: HandsPosition;
}

export interface Position {
  position: {
    seat: number;
    abbreviation: string;
    fullName: string;
  };
  hands: Hands;
}
