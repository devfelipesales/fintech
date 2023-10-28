import React from 'react';
import InputDate from './InputDate';
import { useData } from '../Context/DataContext';

const DateForm = () => {
  const { initialDate, finalDate, setInitialDate, setFinalDate } = useData();

  return (
    <form className='box flex bg-5 gap-m' onSubmit={(e) => e.preventDefault()}>
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
    </form>
  );
};

export default DateForm;
