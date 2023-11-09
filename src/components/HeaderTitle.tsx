import React from 'react';
import { useLocation } from 'react-router-dom';
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
  const [title, setTitle] = React.useState('Resumo');
  const { pathname } = useLocation();

  function upperCaseFirstLetter(value: string) {
    return value.replace(value.charAt(0), value.charAt(0).toUpperCase());
  }

  React.useEffect(() => {
    let arrTitle: string[];
    switch (pathname) {
      case '/':
        setTitle('Resumo');
        document.title = 'Fintech | Resumo';
        break;
      default:
        arrTitle = pathname.split('/');
        setTitle(arrTitle[1]);
        document.title = 'Fintech | ' + upperCaseFirstLetter(arrTitle[1]);
        break;
    }
  }, [pathname]);

  return (
    <Container>
      <h1 style={{ textTransform: 'capitalize' }}>{title}</h1>
    </Container>
  );
};

export default HeaderTitle;
