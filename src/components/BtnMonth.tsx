import React from 'react';
import styled from 'styled-components';
import { useData } from '../Context/DataContext';

type IButtonProps = React.ComponentProps<'button'> & {
  label: string;
  month: number;
};

const Button = styled.button`
  padding: 1.25rem 0.625rem;
  background-color: var(--color-3);
  border: 1px solid var(--color-3);
  border-radius: 1.25rem;
  color: var(--color-2);
  font-weight: 600;
  font-size: 1.125rem;

  &:hover {
    background-color: var(--color-5);
    border: 1px solid var(--color-2);
  }
`;

const BtnMonth = ({ label, month, ...props }: IButtonProps) => {
  const { setInitialDate, setFinalDate } = useData();

  function getFistDay() {
    const date = new Date();
    date.setMonth(month);

    const [dd, mm, yyyy] = date
      .toLocaleDateString() // dd/mm/yyyy
      .replace(String(date.getDate()), '01') // Altera o dia atual pelo Dia 01 do mês
      .split('/');

    const formattedInitDate = `${yyyy}-${mm}-${dd}`;
    return formattedInitDate;
  }

  function getLastDay() {
    const date = new Date();

    // último dia do mês -> mês + 1,  dia = 0
    const lastDayDate = new Date(date.getFullYear(), month + 1, 0);
    const [dd, mm, yyyy] = lastDayDate
      .toLocaleDateString() // dd/mm/yyyy
      .split('/');

    const formattedLastDate = `${yyyy}-${mm}-${dd}`;
    return formattedLastDate;
  }

  function handleClick() {
    setInitialDate(getFistDay());
    setFinalDate(getLastDay());
  }

  return <Button onClick={handleClick}>{label}</Button>;
};

export default BtnMonth;
