import styled from "styled-components";
import { ArrowRight } from "phosphor-react";
const StyledButtonAdvanceRound = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4fc3f7;
  color: white;
  border: 4px solid white;
  border-radius: 3px;
  width: 20%;
  height: 70px;
  font-size: 120%;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 50%;
    height: 60px;
    font-size: 130%;
  }
`;

const ButtonAdvanceRound = (props) => {
  return (
    <StyledButtonAdvanceRound onClick={props.handleAdvanceRound}>
      <ArrowRight size={32} weight="bold" />
    </StyledButtonAdvanceRound>
  );
};

export default ButtonAdvanceRound;
