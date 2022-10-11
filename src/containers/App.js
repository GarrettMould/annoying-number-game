import styles from "./App.css";
import { useState } from "react";

import GameStartStage from "../components/GameStartStage";
import GameOverStage from "../components/GameOverStage";
import { Wrapper } from "./App.styled";
import GamePlayStage from "../components/GamePlayStage";

const App = () => {
  const [stage, setStage] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [guessSubmitted, setGuessSubmitted] = useState(false);
  const [invalidGuess, setInvalidGuess] = useState(false);
  const [userGuess, setUserGuess] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [gameWin, setGameWin] = useState(null);
  // set random answer at the start of game
  const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const handleGameStart = () => {
    setAnswer(randomInt(1, 50));
    setStage(1);
  };

  const handleGuess = () => {
    let userInput = document.querySelector("#userGuess");
    var guess = parseInt(userInput.value);

    if (guess > 0 && guess <= 50) {
      setUserGuess(guess);
      setGuessSubmitted(true);
      setInvalidGuess(false);
      if (guess === answer) {
        setGameOver(true);
        setGameWin(true);
      }

      if (stage > 4 && !(guess === answer)) {
        setGameOver(true);
        setGameWin(false);
      }
    } else {
      setInvalidGuess(true);
    }
  };

  const handleAdvanceRound = () => {
    setGuessSubmitted(false);
    setStage(stage + 1);
  };

  const handleGameReset = () => {
    setAnswer(null);
    setStage(0);
    setGuessSubmitted(false);
    setUserGuess(null);
    setGameOver(false);
    setGameWin(null);
  };

  console.log(stage);
  console.log(answer, userGuess);
  console.log(gameOver, gameWin);

  return (
    <Wrapper>
      {stage === 0 ? (
        <GameStartStage
          stage={stage}
          handleGameStart={handleGameStart}
        ></GameStartStage>
      ) : gameOver ? (
        <GameOverStage
          answer={answer}
          gameWin={gameWin}
          handleGameReset={handleGameReset}
        ></GameOverStage>
      ) : (
        <GamePlayStage
          invalidGuess={invalidGuess}
          handleAdvanceRound={handleAdvanceRound}
          handleGameStart={handleGameStart}
          handleGuess={handleGuess}
          answer={answer}
          stage={stage}
          userGuess={userGuess}
          guessSubmitted={guessSubmitted}
          gameOver={gameOver}
          gameWin={gameWin}
        ></GamePlayStage>
      )}
    </Wrapper>
  );
};

export default App;
