import GameOverText from "../elements/GameOverText";

import GameOverButton from "../elements/GameOverButton";
const GameOverStage = (props) => {
  return (
    <>
      <GameOverText gameWin={props.gameWin}></GameOverText>
      <GameOverButton handleGameReset={props.handleGameReset}></GameOverButton>
    </>
  );
};

export default GameOverStage;
