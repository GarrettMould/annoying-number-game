import styled from "styled-components";

const StyledButtonGameOver = styled.button`
  background-color: transparent;
  color: white;
  border: 4px solid white;
  border-radius: 3px;
  width: 20%;
  height: 70px;
  font-size: 160%;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 50%;
    height: 60px;
    font-size: 130%;
  }
`;

const GameOverButton = (props) => {
  return (
    <StyledButtonGameOver onClick={props.handleGameReset}>
      Play Again
    </StyledButtonGameOver>
  );
};

export default GameOverButton;
