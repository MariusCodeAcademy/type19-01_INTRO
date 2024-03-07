//

import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/header/Header';
import Brands from './components/Brands';
import SingleItemPage from './pages/SingleItemPage';

function App() {
  return (
    <div className=''>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/shop/:id' element={<SingleItemPage />}></Route>
      </Routes>
      <Brands />
    </div>
  );
}

export default App;
