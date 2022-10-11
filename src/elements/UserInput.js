import styled from "styled-components";

const StyledInput = styled.input`
  width: 19%;
  font-size: 30px;
  height: 50px;
  padding: 5px;
  margin-bottom: 3%;
  background: white;
  border: none;
  border-radius: 3px;
  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    width: 47%;
    font-size: 25px;
    height: 40px;
    margin-bottom: 5%;
  }
`;

const UserInput = (props) => {
  return (
    <StyledInput
      type="text"
      id="userGuess"
      name="userGuess"
      className={props.invalidGuess ? "invalid" : null}
    ></StyledInput>
  );
};

export default UserInput;
