export type HandCards = [string, string];
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
