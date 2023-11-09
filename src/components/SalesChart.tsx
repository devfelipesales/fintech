import React from 'react';
import { IVenda, useData } from '../Context/DataContext';
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from 'recharts';

interface IChart {
  data: string;
  pago: number;
  processando: number;
  falha: number;
}

const SalesChart = () => {
  const { data } = useData();

  if (!data) return null;

  function dateToString(date: Date) {
    const arrDate = date.toLocaleString('pt-Br').split(' ', 1);
    const stringDate = arrDate[0];

    const dd = stringDate.substring(8, 10);
    const mm = stringDate.substring(5, 7);

    return `${dd}/${mm}`;
  }

  function createDataChart(data: IVenda[]) {
    let dateString;

    const dataChart = data.reduce(
      (acc: { [key: string]: IChart }, { data, status, preco }) => {
        dateString = dateToString(data);

        if (!acc[dateString]) {
          acc[dateString] = {
            data: dateString,
            pago: 0,
            falha: 0,
            processando: 0,
          };
        }

        acc[dateString][status] += preco;

        return acc;
      },
      {}
    );

    return Object.values(dataChart).map((item) => item);
  }

  const dataChart = createDataChart(data);

  return (
    <ResponsiveContainer width='99%' height={400}>
      <LineChart data={dataChart}>
        <XAxis dataKey='data' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type='monotone' dataKey='pago' stroke='#A36AF9' strokeWidth={3} />
        <Line
          type='monotone'
          dataKey='processando'
          stroke='#FBCB21'
          strokeWidth={3}
        />
        <Line
          type='monotone'
          dataKey='falha'
          stroke='#000000'
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SalesChart;
