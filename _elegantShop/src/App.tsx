//

import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/header/Header';
import SingleItemPage from './pages/SingleItemPage';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/shop/:id' element={<SingleItemPage />}></Route>
        <Route path='/contact-us' element={<ContactUs />}></Route>
      </Routes>
    </div>
  );
}

export default App;
