import styled from "styled-components";

const StyledInput = styled.input`
  width: 50%;
  font-size: 30px;
  height: 45px;
  padding: 5px;
  margin-bottom: 3%;
  background: white;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: black;
  }

  @media (max-width: 768px) {
    width: 72.5%;
    font-size: 25px;
    height: 35px;
    margin-bottom: 5%;
  }
`;

const UserInput = (props) => {
  return (
    <StyledInput type="text" id="userGuess" name="userGuess"></StyledInput>
  );
};

export default UserInput;
