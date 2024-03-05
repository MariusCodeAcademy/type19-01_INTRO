//

import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/header/Header';

function App() {
  return (
    <div className=''>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
