import { ShopCollection } from '../components/homePage/ShopCollection/ShopCollection';
import NewArivals from '../components/homePage/NewArivals';
import BestSellerPage from '../components/bestSellerComp/BestSellerPage';
import Hero from '../components/homePage/Hero';
import Banner from '../components/Banner';
import TimeUntilMK from '../components/UI/TimeUntilMK';
import Instagram from '../components/instagram/Instagram';
import IceBoxCard from '../components/cards/IceBoxCard';
import SwiperDemo from '../components/UI/SwiperDemo';
import NewsLetter from '../components/NewsLetter';
import Header from '../components/header/Header';

function HomePage() {
  return (
    <div>
      <Header main />
      <Hero />
      <TimeUntilMK timeUntil='2024-12-31' title='New Year: ' />
      <SwiperDemo />
      <NewArivals />
      <ShopCollection />
      <BestSellerPage />
      <Banner />
      <IceBoxCard />
      <Instagram />
      <NewsLetter />
    </div>
  );
}

export default HomePage;
