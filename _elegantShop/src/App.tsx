//

import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BestSellerPage from './components/bestSellerComp/BestSellerPage';

function App() {
  return (
    <div className=''>
      {/* Header */}
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
      </Routes>
      <BestSellerPage />
    </div>
  );
}

export default App;
