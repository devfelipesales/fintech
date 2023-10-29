import React from 'react';
import DateForm from './DateForm';
import HeaderTitle from './HeaderTitle';
import Months from './Months';

const Header = () => {
  return (
    <header className='container gap-m'>
      <div className='flex gap-m'>
        <DateForm />
        <HeaderTitle />
      </div>
      <div className='flex'>
        <Months />
      </div>
    </header>
  );
};

export default Header;
