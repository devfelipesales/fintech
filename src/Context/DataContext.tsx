import React from 'react';
import useFetch from '../Hooks/useFetch';

interface IVenda {
  id: string;
  nome: string;
  preco: number;
  status: string;
  pagamento: string;
  parcelas: number | null;
  data: Date;
}

interface IDataContext {
  data: IVenda[] | null;
  loading: boolean;
  error: string | null;
  initialDate: string;
  setInitialDate: React.Dispatch<React.SetStateAction<string>>;
  finalDate: string;
  setFinalDate: React.Dispatch<React.SetStateAction<string>>;
}

const DataContext = React.createContext<IDataContext | null>(null);

export const useData = () => {
  const context = React.useContext(DataContext);
  if (!context) throw new Error('useData precisa estar em DataContextProvider');
  return context;
};

function getDate(n: number) {
  const date = new Date();
  date.setDate(date.getDate() - n);
  const currentDate = date.toLocaleDateString('pt-Br').split('/');
  const day = currentDate[0];
  const month = currentDate[1];
  const year = currentDate[2];
  const formatDate = `${year}-${month}-${day}`;
  return formatDate;
}

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
  const [initialDate, setInitialDate] = React.useState(getDate(15));
  const [finalDate, setFinalDate] = React.useState(getDate(0));

  const { data, loading, error } = useFetch<IVenda[]>(
    `https://data.origamid.dev/vendas/?inicio=${initialDate}&final=${finalDate}`
  );

  return (
    <DataContext.Provider
      value={{
        data,
        loading,
        error,
        initialDate,
        finalDate,
        setInitialDate,
        setFinalDate,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
