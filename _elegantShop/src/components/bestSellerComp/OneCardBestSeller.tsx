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
    <div className='mb-10 mt-5'>
      <div className='Elements relative'>
        <img className='bg-red-50 object-contain w-full h-60' src={img} alt='sony casque' />
        <div className='pill absolute top-4 left-4 px-3 py-1  bg-white rounded'>
          <p className='font-bold text-base	'>HOT</p>
        </div>
      </div>
      <div className='content mt-2'>
        <div className='flex gap-1 '>
          <RatingsST />
        </div>
        <h3 className='text-sm font-semibold mt-1 mb-1'>{name}</h3>
        <PricingTs price={price} soldPrice={soldPrice} />
      </div>
    </div>
  );
}
