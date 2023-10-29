import React from 'react';
import BtnMonth from './BtnMonth';

const Months = () => {
  function monthName(n: number) {
    const date = new Date();
    date.setMonth(date.getMonth() + n);
    let formatDate = new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(
      date
    );
    // UpperCase first letter
    formatDate = formatDate.replace(
      formatDate.charAt(0),
      formatDate.charAt(0).toUpperCase()
    );

    return formatDate;
  }

  function getMonth(n: number) {
    const date = new Date();
    return date.getMonth() + n;
  }

  return (
    <div className='flex gap-m'>
      <BtnMonth label={monthName(-3)} month={getMonth(-3)} />
      <BtnMonth label={monthName(-2)} month={getMonth(-2)} />
      <BtnMonth label={monthName(-1)} month={getMonth(-1)} />
      <BtnMonth label={monthName(0)} month={getMonth(0)} />
    </div>
  );
};

export default Months;
