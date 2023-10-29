import React from 'react';
import styled from 'styled-components';
import { useData } from '../Context/DataContext';

const Box = styled.div`
  padding: var(--gap);
  background-color: var(--color-5);
  border-radius: 1.25rem;
  color: var(--color-2);
  display: flex;
  flex-direction: column;
  gap: var(--gap);

  h2 {
    color: var(--color-1);
  }
  span {
    color: var(--color-2);
    font-weight: 600;
    font-size: 1.5rem;
  }
`;

const Summary = () => {
  const { data, error, loading } = useData();
  let sales, processing, received;

  function getSales() {
    return data
      ?.filter((sale) => sale.status !== 'falha')
      .reduce((acc, { preco }) => {
        return acc + preco;
      }, 0);
  }

  function getReceived() {
    return data
      ?.filter((sale) => sale.status === 'pago')
      .reduce((acc, { preco }) => {
        return acc + preco;
      }, 0);
  }

  function getProcessing() {
    return data
      ?.filter((sale) => sale.status === 'processando')
      .reduce((acc, { preco }) => {
        return acc + preco;
      }, 0);
  }

  if (loading) return;
  if (error) return <h2 style={{ color: 'red' }}>{error}</h2>;

  if (data?.length) {
    sales = getSales()?.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
    processing = getProcessing()?.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
    received = getReceived()?.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }

  return (
    <div className='flex gap-m'>
      <Box>
        <h2>Vendas</h2>
        <span>{sales ? sales : 'R$ 0,00'}</span>
      </Box>
      <Box>
        <h2>Recebido</h2>
        <span>{received ? received : 'R$ 0,00'}</span>
      </Box>
      <Box>
        <h2>Processando</h2>
        <span>{processing ? processing : 'R$ 0,00'}</span>
      </Box>
    </div>
  );
};

export default Summary;
