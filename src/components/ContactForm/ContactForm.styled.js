import styled from 'styled-components';

export const Form = styled.form`
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 30px;
  border: 1px solid;
  border-radius: 4px;
  width: 450px;

  &:focus-within {
  border-color: blue;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 15px;
  font-size: 18px;

  &:focus-within {
  color: blue;
`;

export const InputForm = styled.input`
  width: 250px;
  height: 25px;
  font-size: 18px;
`;

export const BtnForm = styled.button`
  width: 100px;
  height: 25px;
  border: 1px solid green;
  border-radius: 4px;
  font-size: 14px;

  &:hover {
    background-color: blue;
    color: white;
    border: 1px solid black;
  }
`;
