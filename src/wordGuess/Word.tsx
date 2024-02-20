import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 0.25em;
  font-size: 6rem;
  font-weight: bold;
  font-family: monospace;
  text-transform: uppercase;
`;

type WordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

export const Word = ({ guessedLetters, wordToGuess, reveal = false }: WordProps) => {
  return (
    <Container>
      {wordToGuess.split("").map((letter, index) => (
        <span key={index} style={{ borderBottom: "0.1em solid black" }}>
          <span
            style={{
              visibility: guessedLetters.includes(letter) || reveal ? "visible" : "hidden",
              color: !guessedLetters.includes(letter) && reveal ? "red" : "black",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </Container>
  );
};
