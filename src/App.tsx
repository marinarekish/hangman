import { useCallback, useEffect, useState } from "react";
import words from "./wordList.json";
import styled from "styled-components";
import { Hangman } from "./hangman/Hangman";
import { Word } from "./wordGuess/Word";
import { Keyboard } from "./keyboard/Keyboard";

const GameBoard = styled.div`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin: 0 auto;
`;

const Header = styled.div`
  font-size: 2rem;
  text-align: center;
`;

const KeyboardDiv = styled.div`
  align-self: stretch;
`;

function getWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
      setWordToGuess(getWord());
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const incorrectLetters = guessedLetters.filter((letter) => !wordToGuess.includes(letter));

  // win-win definition
  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess.split("").every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;

      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters, isWinner, isLoser]
  );

  return (
    <GameBoard>
      <Header>
        {isWinner && "Winner!"}
        {isLoser && "You're loser!"}
      </Header>
      <Hangman guesses={incorrectLetters.length} />
      <Word reveal={isLoser} guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
      <KeyboardDiv>
        <Keyboard
          disabled={isLoser || isWinner}
          activeLetters={guessedLetters.filter((letter) => wordToGuess.includes(letter))}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </KeyboardDiv>
    </GameBoard>
  );
}

export default App;
