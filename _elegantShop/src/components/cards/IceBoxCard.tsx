import IceBoxSinglerCard from './IceBoxSinglerCard';

export default function IceBoxCard() {
  return (
    <div className=' grid m-8 gap-2 gap-y-6 grid-cols-2 md:grid-cols-4 md:ml-40 md:mr-40 md:gap-6  '>
      <IceBoxSinglerCard
        img='/public/HomePageImages/IceBoxImg/Vector.png'
        title='Free Shipping'
        info='Order above $200'
      />
      <IceBoxSinglerCard
        img='/public/HomePageImages/IceBoxImg/money.png'
        title='Money-Back'
        info='30 days guarantee'
      />
      <IceBoxSinglerCard
        img='/public/HomePageImages/IceBoxImg/lock 01.png'
        title='Secure Payments'
        info='Secured by Stripe'
      />
      <IceBoxSinglerCard
        img='/public/HomePageImages/IceBoxImg/Rectangle 77.png'
        title='24/7 Support'
        info='Phone and Email support'
      />
    </div>
  );
}
