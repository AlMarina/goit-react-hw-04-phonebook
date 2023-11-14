import { Container, InputFilter, Label } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <Container>
      <Label>
        Find contacts by name
        <InputFilter
          type="text"
          name="filter"
          required
          onChange={onChange}
          value={value}
        />
      </Label>
    </Container>
  );
};
