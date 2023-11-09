import React from 'react';
import { IVenda } from '../Context/DataContext';
import { useParams } from 'react-router-dom';
import useFetch from '../Hooks/useFetch';
import Loading from '../components/Loading';
import styled from 'styled-components';

// Criação de nova interface com as mesmas propriedades de IVenda, excluindo a propriedade "data";
// Necessário fazer isso, pois nessa parte da venda específica a API não retorna a data.
type VendaSemData = Omit<IVenda, 'data'>;

const Container = styled.div`
  display: grid;
  gap: var(--gap-s);

  div {
    padding: var(--gap);
    background-color: var(--color-5);
    border-radius: 1.25rem;
  }
`;

const Sale = () => {
  const { id } = useParams();
  const { data, loading } = useFetch<VendaSemData>(
    `https://data.origamid.dev/vendas/${id}`
  );

  if (loading) return <Loading />;
  if (!data) return null;
  return (
    <Container>
      <div>{`ID: ${data.id}`}</div>
      <div>{`Nome: ${data.nome}`}</div>
      <div>{`Preço: ${data.preco.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      })}`}</div>
      <div>{`Status: ${data.status}`}</div>
      <div>{`Pagamento: ${data.pagamento}`}</div>
    </Container>
  );
};

export default Sale;
