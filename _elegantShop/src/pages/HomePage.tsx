import { ShopCollection } from '../components/homePage/ShopCollection/ShopCollection';

import NewArivals from '../components/homePage/NewArivals';

import BestSellerPage from '../components/bestSellerComp/BestSellerPage';
import TimerST from '../components/TimerST/TimerST';

import Hero from '../components/homePage/Hero';

import Banner from '../components/Banner';

function HomePage() {
  return (
    <div>
      <Hero />
      <h1>Slider</h1>
      <BestSellerPage />
      <Banner />
      <NewArivals />
      <ShopCollection />
      <TimerST />
    </div>
  );
}

export default HomePage;
