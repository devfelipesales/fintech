import React from 'react';

const HeaderTitle = () => {
  const { pathname } = window.location;

  function upperCaseFirstLetter(value: string) {
    return value.replace(value.charAt(0), value.charAt(0).toUpperCase());
  }

  let title: string;
  let arrTitle: string[];
  switch (pathname) {
    case '/':
      title = 'Resumo';
      document.title = 'Fintech | ' + title;
      break;
    default:
      arrTitle = pathname.split('/');
      title = arrTitle[1];
      document.title = 'Fintech | ' + upperCaseFirstLetter(title);
      break;
  }

  return (
    <div className='box bg-3'>
      <h1 style={{ textTransform: 'capitalize' }}>{title}</h1>
    </div>
  );
};

export default HeaderTitle;
