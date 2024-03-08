//

import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SingleItemPage from './pages/SingleItemPage';
import ContactUs from './pages/ContactUs';
import BlogPage from './pages/BlogPage';

function App() {
  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/shop/:id' element={<SingleItemPage />}></Route>
        <Route path='/contact-us' element={<ContactUs />}></Route>
        <Route path='/blog' element={<BlogPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
