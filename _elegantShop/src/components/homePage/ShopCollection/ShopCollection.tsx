import { CollectionCard } from './CollectionCard';

export const ShopCollection = () => {
  return (
    <div className='container grid justify-center'>
      <h2 className='text-[34px] leading-[38px] text-center'>
        Shop Collection
      </h2>
      <div className='grid auto-rows-[180px] auto-cols-[311px] md:grid-cols-2 gap-4 mt-4'>
        <CollectionCard
          heading='Headband'
          className="bg-[url('/img/home-page/mobile-head-band.png')] row-span-2"
        />
        <CollectionCard
          className="bg-[url('/img/home-page/mobile-accessories.png')]"
          heading='Earbuds'
        />
        <CollectionCard
          heading='Accessories'
          className="bg-[url('/img/home-page/mobile-earbuds.png')]"
        />
      </div>
    </div>
  );
};
