import { ShopCollection } from '../components/homePage/ShopCollection/ShopCollection';

import NewArivals from '../components/homePage/NewArivals';

import BestSellerPage from '../components/bestSellerComp/BestSellerPage';

function HomePage() {
  return (
    <div>
      <h1 className='text-2xl'>Hero</h1>
      <h1>Slider</h1>
      <BestSellerPage />
      <NewArivals />
      <ShopCollection />
    </div>
  );
}

export default HomePage;
