import styled from "styled-components";

const StyledButtonAdvanceRound = styled.button`
  background-color: #4fc3f7;
  color: white;
  border: 4px solid white;
  border-radius: 3px;
  width: 50%;
  height: 70px;
  font-size: 120%;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 75%;
    height: 60px;
    font-size: 150%;
  }
`;

const ButtonAdvanceRound = (props) => {
  return (
    <StyledButtonAdvanceRound onClick={props.handleAdvanceRound}>
      &#8594;
    </StyledButtonAdvanceRound>
  );
};

export default ButtonAdvanceRound;
