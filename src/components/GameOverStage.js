import GameOverText from "../elements/GameOverText";
import AnswerRevealText from "../elements/AnswerRevealText";
import GameOverButton from "../elements/GameOverButton";
const GameOverStage = (props) => {
  return (
    <>
      <GameOverText gameWin={props.gameWin}></GameOverText>
      <AnswerRevealText answer={props.answer}></AnswerRevealText>
      <GameOverButton handleGameReset={props.handleGameReset}></GameOverButton>
    </>
  );
};

export default GameOverStage;
