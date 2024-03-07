import RatingTJ from '../../UI/RatingTJ';

type CardProps = {
  img: string;
  price: string;
  rating: number;
};

export default function Card({ img, price, rating }: CardProps) {
  return (
    <div className=''>
      <div className='relative group min-w-[231px] mb-8 h-[412px] xl:w-[262px] xl:mb-12 xl:h-[459px]'>
        <img className='w-full' src={img} alt='product picture' />
        <button className='border absolute top-3 right-3 hidden group-hover:block xl:right-4 p-1 shadow-md rounded-full bg-white'>
          <img src='/public/HomePageImages/Line.png' alt='press to make your favorite' />
        </button>
        <button className='top-64 left-3 hidden group-hover:block w-[202px] absolute h-10 xl:top-[280px] xl:w-[230px] xl:left-4 xl:h-12 bg-black text-white rounded-xl'>
          Add to cart
        </button>
        <span className='bg-white absolute top-3 left-3 py-1 px-4 text-sm font-bold  leading-4  '>NEW</span>
        <RatingTJ rating={rating} />
        <div>
          <h1 className='text-base font-semibold '>Skullcandy - Crusher anc 2 wireless headphones</h1>
          <p className='mt-1 text-sm font-semibold'>{price}</p>
        </div>
      </div>
    </div>
  );
}
