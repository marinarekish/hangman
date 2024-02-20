import { BODY_PARTS } from "./Constants_hangman";
import { SCAFFOLD } from "./Constants_Scaffold";

type HangmanProps = {
  guesses: number;
};

export const Hangman = ({ guesses }: HangmanProps) => {
  return (
    <div style={{ position: "relative" }}>
      {BODY_PARTS.slice(0, guesses)}
      {SCAFFOLD}
    </div>
  );
};
