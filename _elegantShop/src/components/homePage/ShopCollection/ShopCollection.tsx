import { CollectionCard } from './CollectionCard';

export const ShopCollection = () => {
  return (
    <div className='container grid justify-center w-full md:justify-stretch'>
      <h2 className='text-[34px] leading-[38px] md:text-[40px] md:leading-[44px] text-center md:text-left mt-10 md:mt-12'>
        Shop Collection
      </h2>
      <div className='grid md:auto-rows-[332px] auto-rows-[180px] auto-cols-[311px] md:auto-cols-auto md:grid-cols-2 gap-4 mt-4 md:mt-12 md:gap-6'>
        <CollectionCard
          heading='Headband'
          className="bg-[url('/img/home-page/mobile-head-band.png')] md:bg-[url('/img/home-page/desktop-head-band.png')] row-span-2 md:bg-cover bg-center"
        />
        <CollectionCard
          heading='Accessories'
          className="bg-[url('/img/home-page/mobile-earbuds.png')] md:bg-[url('/img/home-page/desktop-earbuds.png')]  md:bg-cover md:bg-center"
        />
        <CollectionCard
          className="bg-[url('/img/home-page/mobile-accessories.png')] md:bg-[url('/img/home-page/desktop-accessories.png')]  md:bg-cover md:bg-center"
          heading='Earbuds'
        />
      </div>
    </div>
  );
};
