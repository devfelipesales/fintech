import React from 'react';
import DateForm from './DateForm';
import HeaderTitle from './HeaderTitle';
import Months from './Months';
import styled from 'styled-components';

const ContainerHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: var(--gap);

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 600px) {
    gap: var(--gap-s);
  }
`;

const Container = styled.div`
  display: grid;
`;

const Header = () => {
  return (
    <header className='flex-column media-gap'>
      <ContainerHeader>
        <DateForm />
        <HeaderTitle />
      </ContainerHeader>
      <Container>
        <Months />
      </Container>
    </header>
  );
};

export default Header;
