import { ShopCollection } from '../components/homePage/ShopCollection/ShopCollection';

import NewArivals from '../components/homePage/NewArivals';

import BestSellerPage from '../components/bestSellerComp/BestSellerPage';

import Hero from '../components/homePage/Hero';

import Banner from '../components/Banner';
import TimeUntilMK from '../components/UI/TimeUntilMK';
import IceBoxCard from '../components/cards/IceBoxCard';

function HomePage() {
  return (
    <div>
      <Hero />
      <TimeUntilMK timeUntil='2024-12-31' title='New Year:' />
      <h1>Slider</h1>
      <BestSellerPage />
      <Banner />
      <NewArivals />
      <ShopCollection />
      <IceBoxCard />
    </div>
  );
}

export default HomePage;
