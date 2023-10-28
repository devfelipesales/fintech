import React from 'react';
import DateForm from './DateForm';
import HeaderTitle from './HeaderTitle';

const Header = () => {
  return (
    <>
      <div className='flex gap-m'>
        <DateForm />
        <HeaderTitle />
      </div>
    </>
  );
};

export default Header;
