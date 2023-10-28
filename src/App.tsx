import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './Style.css';
import SideNav from './components/SideNav';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='flex box'>
          <SideNav />
          <main>
            <Routes></Routes>
          </main>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
