import { ShopCollection } from '../components/homePage/ShopCollection';

import NewArivals from '../components/homePage/NewArivals';

import BestSellerPage from '../components/bestSellerComp/BestSellerPage';
import TimerST from '../components/TimerST/TimerST';
import ContactForm from '../components/ContactFormST/ContactForm';

function HomePage() {
  return (
    <div>
      <h1 className='text-2xl'>Hero</h1>
      <h1>Slider</h1>
      <BestSellerPage />
      <NewArivals />
      <ShopCollection />
      <TimerST />
      <ContactForm />
    </div>
  );
}

export default HomePage;
