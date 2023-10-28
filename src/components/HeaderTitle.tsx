import React from 'react';

const HeaderTitle = () => {
  const { pathname } = window.location;
  console.log(pathname);
  let title: string;
  switch (pathname) {
    case '/':
      title = 'Resumo';
      break;
    default:
      title = pathname.substring(1, pathname.length);
      break;
  }

  return (
    <div className='box bg-3'>
      <h1 style={{ textTransform: 'capitalize' }}>{title}</h1>
    </div>
  );
};

export default HeaderTitle;
