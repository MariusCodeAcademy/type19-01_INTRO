//

import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/header/Header';
import Brands from './components/Brands';


function App() {
  return (
    <div className=''>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
      </Routes>
      <Brands />
    </div>
  );
}

export default App;
