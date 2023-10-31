import React from 'react';
import InputDate from './InputDate';
import { useData } from '../Context/DataContext';
import styled from 'styled-components';

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--gap);
  background-color: var(--color-5);
  padding: var(--gap);
  border-radius: 1.25rem;
`;

const DateForm = () => {
  const { initialDate, finalDate, setInitialDate, setFinalDate } = useData();

  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <InputDate
        label='Início'
        name='initialDate'
        value={initialDate}
        onChange={({ target }) => setInitialDate(target.value)}
      />
      <InputDate
        label='Final'
        name='finalDate'
        value={finalDate}
        onChange={({ target }) => setFinalDate(target.value)}
      />
    </Form>
  );
};

export default DateForm;
