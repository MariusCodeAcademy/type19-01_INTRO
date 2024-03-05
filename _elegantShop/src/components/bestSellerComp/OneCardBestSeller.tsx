import RatingsST from '../RatingsST';

export default function OneCardBestSeller({ name, price }: { name: string; price: string }) {
  return (
    <div className='w-40 h-72'>
      <div className='Elements w-44 h-52 relative'>
        <img className='w-full h-full bg-red-50' src='/public/imgBest Seller/d2eda88ccb4cc71f499a5d94c2a5bd61.png' alt='sony casque' />
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
        <p className='text-xs font-semibold'>$ {price}</p>
      </div>
    </div>
  );
}
