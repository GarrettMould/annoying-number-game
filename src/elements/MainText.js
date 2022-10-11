import styled from "styled-components";

const FlexCenter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledHintText = styled.div`
  color: white;
  font-size: 350%;
  font-weight: 700;
  margin-bottom: 3%;
  @media (max-width: 768px) {
    font-size: 250%;
    margin-bottom: 3%;
  }
`;

const MainText = (props) => {
  var hint;
  {
    props.answer > props.userGuess ? (hint = "Too Low!") : (hint = "Too High!");
  }

  var stage = `Round ${props.stage}`;

  var playingText = props.guessSubmitted ? hint : stage;

  var gameOverText = props.gameWin ? "You Win!" : "You Lose!";

  return (
    <FlexCenter>
      <StyledHintText>
        {props.gameOver ? gameOverText : playingText}
      </StyledHintText>
    </FlexCenter>
  );
};

export default MainText;
