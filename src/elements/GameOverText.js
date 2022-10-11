import styled from "styled-components";

const FlexCenter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledGameOverText = styled.div`
  color: white;
  font-size: 350%;
  font-weight: 700;
  margin-bottom: 2%;

  @media (max-width: 768px) {
    font-size: 250%;
    margin-bottom: 3%;
  }
`;

const GameOverText = (props) => {
  return (
    <FlexCenter>
      <StyledGameOverText>
        {props.gameWin ? "You Win!" : "You Lose!"}
      </StyledGameOverText>
    </FlexCenter>
  );
};

export default GameOverText;
