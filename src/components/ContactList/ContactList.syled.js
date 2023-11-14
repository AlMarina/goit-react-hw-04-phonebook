import styled from 'styled-components';

export const ListItem = styled.li`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;

  &::first-letter {
    text-transform: uppercase;
  }
`;
export const BtnDelete = styled.button`
  margin-left: 20px;
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
