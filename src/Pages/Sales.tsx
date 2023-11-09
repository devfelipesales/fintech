import styled from 'styled-components';
import { useData } from '../Context/DataContext';
import Loading from '../components/Loading';
import { NavLink } from 'react-router-dom';

const Container = styled.ul`
  display: grid;
  gap: var(--gap-s);
`;

const Box = styled.div`
  display: grid;
  grid-template-columns: auto auto 1fr;
  align-items: center;
  gap: var(--gap);
  background-color: var(--color-5);
  border-radius: 1.25rem;
  padding: var(--gap);

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const Id = styled.div`
  font-family: 'monospace';
  font-size: 0.8125rem;
  cursor: pointer;

  a {
    text-decoration: none;
    color: var(--color-2);
  }
`;

const Sales = () => {
  const { data, loading, error } = useData();

  if (error) return <h2 style={{ color: 'red' }}>{error}</h2>;
  if (loading) return <Loading />;
  if (!data?.length) return;
  return (
    <Container>
      {data.map(({ id, nome, preco }) => {
        return (
          <li key={id}>
            <Box>
              <Id>
                <NavLink to={`/vendas/${id}`}>{id}</NavLink>
              </Id>
              <div>{nome}</div>

              <div style={{ textAlign: 'right' }}>
                {preco.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </div>
            </Box>
          </li>
        );
      })}
    </Container>
  );
};

export default Sales;
