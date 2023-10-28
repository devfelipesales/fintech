import React from 'react';
import InputDate from './InputDate';

const DateForm = () => {
  const [initialDate, setInitialDate] = React.useState('');
  const [finalDate, setFinalDate] = React.useState('');

  function handleChange(target: EventTarget & HTMLInputElement) {}

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
