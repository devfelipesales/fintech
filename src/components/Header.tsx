import React from 'react';
import DateForm from './DateForm';
import HeaderTitle from './HeaderTitle';
import Months from './Months';
import styled from 'styled-components';

const ContainerHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--gap);
`;

const Container = styled.div`
  display: grid;
  flex: 1;
`;

const Header = () => {
  return (
    <header className='flex-column gap-m'>
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
