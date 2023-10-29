import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DataContextProvider } from './Context/DataContext';
import './Style.css';
import SideNav from './components/SideNav';
import Summary from './Pages/Summary';
import Header from './components/Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <DataContextProvider>
          <div className='flex box gap-m'>
            <SideNav />

            <main className='container'>
              <Header />
              <Routes>
                <Route path='/' element={<Summary />} />
              </Routes>
            </main>
          </div>
        </DataContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
