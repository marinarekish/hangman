import styles from "../styles/Keyboard.module.css";
import styled from "styled-components";
import { KEYS } from "./Constants_Keyboard";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(75px, 1fr));
  gap: 0.5rem;
`;

// const Letter = styled.button`
//   padding: 0.5rem;
//   width: 100%;
//   aspect-ratio: 1/1;
//   background: none;
//   border: 3px solid black;
//   font-size: 2.5rem;
//   font-weight: bold;
//   text-transform: uppercase;
//   cursor: pointer;
//   &:hover:not(:disabled) {
//     background-color: lightblue;
//   }
//   &:focus:not(:disabled) {
//     background-color: lightblue;
//   }
//   &:active {
//     background-color: lightblue;
//     opacity: 0.5;
//     color: white;
//   }
//   &:inactive {
//     opacity: 0.3;
//   }
// `;

type KeyboardProps = {
  activeLetters: string[];
  inactiveLetters: string[];
  disabled?: boolean;
  addGuessedLetter: (letter: string) => void;
};

export const Keyboard = ({ activeLetters, inactiveLetters, disabled, addGuessedLetter }: KeyboardProps) => {
  return (
    <Container>
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);

        return (
          // <Letter key={key} onClick={() => addGuessedLetter(key)}>
          //   {key}
          // </Letter>
          <button
            onClick={() => addGuessedLetter(key)}
            className={`${styles.btn} ${isActive ? styles.active : ""} 
            ${isInactive ? styles.inactive : ""}`}
            disabled={isInactive || isActive || disabled}
            key={key}
          >
            {key}
          </button>
        );
      })}
    </Container>
  );
};
