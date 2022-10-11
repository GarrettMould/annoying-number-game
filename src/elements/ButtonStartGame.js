import styled from "styled-components";

const StyledButtonStartGame = styled.button`
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

const ButtonStartGame = (props) => {
  return (
    <StyledButtonStartGame
      onClick={props.stage === 0 ? props.handleGameStart : props.handleGuess}
    >
      {props.stage === 0 ? "Start Game" : "Submit Guess"}
    </StyledButtonStartGame>
  );
};

export default ButtonStartGame;
