import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-s);
`;

const Label = styled.label`
  font-weight: 600;
  padding: var(--gap-s);
  background-color: var(--color-4);
  border-radius: 1.25rem;
  display: block;
`;

const Input = styled.input`
  padding: var(--gap-s);
  background-color: var(--color-4);
  border-radius: 1.25rem;
  border: none;
  font-family: monospace;
  font-size: 1rem;
  color: var(--color-2);
  align-self: self-start;
`;

type IInputProps = React.ComponentProps<'input'> & {
  label: string;
};

const InputDate = ({ label, name, value, onChange }: IInputProps) => {
  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <Input
        type='date'
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      />
    </Container>
  );
};

export default InputDate;
