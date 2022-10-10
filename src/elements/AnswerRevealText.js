import styled from "styled-components";

const FlexCenter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledAnswerText = styled.div`
  font-size: 350%;
  color: white;
  font-weight: 800;
  margin-bottom: 3%;
`;
const AnswerRevealText = (props) => {
  return (
    <FlexCenter>
      <StyledAnswerText>{props.answer}</StyledAnswerText>
    </FlexCenter>
  );
};

export default AnswerRevealText;
