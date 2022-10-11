import styled from "styled-components";

import ButtonStartGame from "../elements/ButtonStartGame";

const FlexCenter = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledText = styled.div`
  color: white;
  font-size: 500%;
  text-align: center;
  font-weight: 700;
  margin-bottom: 5%;

  @media (max-width: 768px) {
    font-size: 350%;
    margin-bottom: 20%;
  }
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
