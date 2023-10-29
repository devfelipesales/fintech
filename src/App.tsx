import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DataContextProvider } from './Context/DataContext';
import './Style.css';
import SideNav from './components/SideNav';
import Summary from './Pages/Summary';
import Header from './components/Header';
import Sales from './Pages/Sales';

function App() {
  return (
    <>
      <BrowserRouter>
        <DataContextProvider>
          <div className='containerApp'>
            <SideNav />

            <main className='container gap-m'>
              <Header />
              <Routes>
                <Route path='/' element={<Summary />} />
                <Route path='/vendas' element={<Sales />} />
              </Routes>
            </main>
          </div>
        </DataContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
