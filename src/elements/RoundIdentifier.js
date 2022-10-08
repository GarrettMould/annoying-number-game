import styled from "styled-components";

const FlexCenter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledRoundIdentifier = styled.div`
  color: white;
  font-size: 200%;
  font-weight: 700;
`;

const RoundIdentifier = (props) => {
  return (
    <FlexCenter>
      <StyledRoundIdentifier>Round {props.stage}</StyledRoundIdentifier>
    </FlexCenter>
  );
};

export default RoundIdentifier;
