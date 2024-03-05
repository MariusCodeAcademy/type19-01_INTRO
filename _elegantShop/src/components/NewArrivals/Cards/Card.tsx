type CardProps = {
  img: string;
  price: string;
};

export default function Card({ img, price }: CardProps) {
  return (
    <div className='min-w-[231px]  mb-8 h-[412px]'>
      <div className='relative group'>
        <img className='' src={img} alt='' />
        <button className='border absolute top-3 right-3 hidden group-hover:block p-1 rounded-full bg-white'>
          <img src='/public/HomePageImages/Line.png' alt='' />
        </button>
        <button className='top-60 left-3 hidden group-hover:block w-[202px] absolute h-10  bg-black text-white rounded-xl'>
          Add to cart
        </button>
        <span className='bg-white absolute top-3 left-3 py-1 px-4 text-sm  leading-4 '>NEW</span>
        <div className='flex mt-3 mb-1'>
          <span>
            <img src='/public/HomePageImages/Star Icon.png' alt='star icon' />
          </span>
          <span>
            <img src='/public/HomePageImages/Star Icon.png' alt='star icon' />
          </span>
          <span>
            <img src='/public/HomePageImages/Star Icon.png' alt='star icon' />
          </span>
          <span>
            <img src='/public/HomePageImages/Star Icon.png' alt='star icon' />
          </span>
          <span>
            <img src='/public/HomePageImages/Star Icon.png' alt='star icon' />
          </span>
        </div>
        <div>
          <h1 className='text-base fw-semibold'>Skullcandy - Crusher anc 2 wireless headphones</h1>
          <p className='mt-1 text-sm fw-semibold'>{price}</p>
        </div>
      </div>
    </div>
  );
}
