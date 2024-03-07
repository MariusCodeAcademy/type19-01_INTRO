import PricingTs from '../UI/PricingTs';
import RatingsST from '../UI/RatingsST';

type BestSellerProps = {
  name: string;
  price: number;
  soldPrice?: number;
  img: string;
};

export default function OneCardBestSeller({ name, price, soldPrice, img }: BestSellerProps) {
  return (
    <div className='lg:w-[262px] lg:h-[459px] sm:w-[152px] sm:lg:h-[281px] '>
      <div className='Elements w-full relative'>
        <img className='lg:w-[262px] sm:w-[152px] lg:h-[349px] sm:h-[203px] bg-red-50 object-contain' src={img} alt='sony casque' />
        <div className='pill absolute top-5 left-5 px-3 py-1  bg-white rounded'>
          <p className='font-bold text-base	'>HOT</p>
        </div>
      </div>
      <div className='content mt-2'>
        <div className='flex gap-1 '>
          <RatingsST />
          {/* <img className='h-4 w-4' src='/public/Star Fill.png' alt='star icon' />
          <img className='h-4 w-4' src='/public/Star Fill.png' alt='star icon' />
          <img className='h-4 w-4' src='/public/Star Fill.png' alt='star icon' />
          <img className='h-4 w-4' src='/public/Star Fill.png' alt='star icon' />
          <img className='h-4 w-4' src='/public/Star Fill.png' alt='star icon' /> */}
        </div>
        <h3 className='text-sm font-semibold mt-1 mb-1'>{name}</h3>
        <PricingTs price={price} soldPrice={soldPrice} />
      </div>
    </div>
  );
}
