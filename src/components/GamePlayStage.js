import RoundIdentifier from "../elements/RoundIdentifier";
import MainText from "../elements/MainText";
import ButtonStartGame from "../elements/ButtonStartGame";
import ButtonAdvanceRound from "../elements/ButtonAdvanceRound";
import UserInput from "../elements/UserInput";

const GamePlayStage = (props) => {
  var button;

  {
    props.guessSubmitted
      ? (button = (
          <ButtonAdvanceRound
            handleAdvanceRound={props.handleAdvanceRound}
          ></ButtonAdvanceRound>
        ))
      : (button = (
          <ButtonStartGame
            handleGuess={props.handleGuess}
            handleGameStart={props.handleGameStart}
          ></ButtonStartGame>
        ));
  }
  return (
    <>
      <MainText
        answer={props.answer}
        stage={props.stage}
        userGuess={props.userGuess}
        guessSubmitted={props.guessSubmitted}
        gameOver={props.gameOver}
        gameWin={props.gameWin}
      ></MainText>
      {props.guessSubmitted ? null : (
        <UserInput invalidGuess={props.invalidGuess}></UserInput>
      )}
      {button}
    </>
  );
};

export default GamePlayStage;
