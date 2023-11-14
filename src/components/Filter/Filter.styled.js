import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 10px;
  margin-bottom: 30px;
  font-size: 18px;

  &:focus-within {
  color: blue;
`;

export const InputFilter = styled.input`
  width: 250px;
  height: 25px;
  font-size: 18px;
  outline: none;
`;

export const Container = styled.div`
  width: 500px;
`;
