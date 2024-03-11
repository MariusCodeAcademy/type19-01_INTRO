const Offer = () => {
  return (
    <div className='pt-2 pb-2 pl-8 pr-8 container flex justify-center'>
      <div className='flex justify-between sm:gap-5 items-center'>
        <div className='flex items-center'>
          <img src='/offer/Vector.svg' alt='discount percentages' />
          <p className='pl-3 pr-3'>30% off storewide - Limited time!</p>
          <button className='hidden sm:flex border-b border-blue-500 text-blue-500'>
            Shop Now!
          </button>
          <img
            src='/offer/arrow-right.svg'
            alt='arrow right'
            className='hidden sm:flex'
          />
        </div>

        <img
          src='/offer/close.svg'
          alt='close'
          className='flex justify-end sm:hidden'
        />
      </div>
    </div>
  );
};

export default Offer;
