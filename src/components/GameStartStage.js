import styled from "styled-components";

import ButtonStartGame from "../elements/ButtonStartGame";

const FlexCenter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledText = styled.div`
  color: white;
  font-size: 300%;
  text-align: center;
  font-weight: 700;
  margin-bottom: 5%;
`;

const GameStartStage = (props) => {
  return (
    <>
      <FlexCenter>
        <StyledText>Random Number Guess</StyledText>
      </FlexCenter>
      <ButtonStartGame
        stage={props.stage}
        handleGameStart={props.handleGameStart}
      ></ButtonStartGame>
    </>
  );
};

export default GameStartStage;
