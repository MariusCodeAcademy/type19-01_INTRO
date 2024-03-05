import { ShopCollection } from '../components/homePage/ShopCollection/ShopCollection';

import NewArivals from '../components/homePage/NewArivals';

import BestSellerPage from '../components/bestSellerComp/BestSellerPage';

import Hero from "../components/homePage/Hero";

function HomePage() {
  return (
      <div>
        <Hero />
        <h1>Slider</h1>
      <BestSellerPage />
      <NewArivals />
      <ShopCollection />
      </div>
  );
}

export default HomePage;
