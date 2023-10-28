import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './Style.css';
import SideNav from './components/SideNav';
import Summary from './Pages/Summary';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='flex box gap-m'>
          <SideNav />
          <main>
            <Routes>
              <Route path='/' element={<Summary />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
