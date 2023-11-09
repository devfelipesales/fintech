import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: var(--gap);
  border-radius: 1.25rem;
  background-color: var(--color-3);

  @media (max-width: 960px) {
    grid-row: 1;
  }
`;

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
    <Container>
      <h1 style={{ textTransform: 'capitalize' }}>{title}</h1>
    </Container>
  );
};

export default HeaderTitle;
