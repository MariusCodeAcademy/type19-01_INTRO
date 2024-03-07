import PriceTJ from '../UI/PriceTJ';
import RatingTJ from '../UI/RatingTJ';
import TimeUntilMK from '../UI/TimeUntilMK';

const ProdInfo = () => {
  return (
    <div className='px-8'>
      <div className='flex gap-3'>
        <RatingTJ rating={5} />
        <p className='mt-2'>11 Reviews</p>
      </div>
      <div>
        <h2 className='text-4xl my-4'>Tray Table</h2>
        <p className='text-base text-[#6C7275] my-4'>
          Buy one or buy a few and make every space where you sit more convenient. Light and easy to
          move around with removable tray top, handy for serving snacks.
        </p>
        <PriceTJ price={400} currency='$' salePrice={199} />
        <div className='py-5'></div>
        <TimeUntilMK timeUntil='2024-03-10' title='Offer expires in:' background='white' />
      </div>
      <div>
        <h3 className='text text-[#6C7275]'>Measurements</h3>
        <p className='text-base'>17 1/2 x 20 5/8 "</p>
        <h4 className='text-[#6C7275]'>Choose Color</h4>
        <p>Black</p>
        <div className='flex gap-1 mb-10'>
          <img src='\img\prodInfo\Image1.jpg' alt='black' />
          <img src='\img\prodInfo\Image2.jpg' alt='beige' />
          <img src='\img\prodInfo\Image3.jpg' alt='red' />
          <img src='\img\prodInfo\Image4.jpg' alt='white' />
        </div>
        <div className='grid gap-3'>
          <div className='flex gap-2'>
            <div className='w-1/4 flex border rounded-md py-1'>
              <button className='w-1/3 border-r'>-</button>
              <input className='w-1/3 pl-3' type='number' placeholder='1' step={1} min={1} />
              <button className='w-1/3 border-l'>+</button>
            </div>
            <button className='border rounded-md border-black flex gap-3 w-3/4 justify-center pt-1'>
              <img className='w-5 pt-1' src='/img/header/heart.svg' alt='whishlist' />
              Whishlist
            </button>
          </div>
          <div className=''>
            <button className='w-full border rounded-md bg-[#232627] py-1 text-white' type='button'>
              Add to Cart
            </button>
          </div>
        </div>
        <div className='grid mt-10 gap-3'>
          <div className='flex'>
            <p className='w-1/2 text-gray-500'>SKU</p>
            <p className='w-1/2'>1117</p>
          </div>
          <div className='flex'>
            <p className='w-1/2 text-gray-500'>CATEGORY</p>
            <p className='w-1/2'>Living Room, Bedroom</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdInfo;
