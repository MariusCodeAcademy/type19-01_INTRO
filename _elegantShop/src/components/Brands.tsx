import OneBrand from './UI/OneBrand';

function Brands() {
  return (
    <div>
      <div className='flex justify-start pl-8 gap-4 my-6 overflow-hidden flex-shrink-0 sm:justify-center lg:gap-6 lg:my-10'>
        <OneBrand src='/images/logo 01.svg' alt='Brand 1' />
        <OneBrand src='/images/logo 02.svg' alt='Brand 2' />
        <OneBrand src='/images/logo 03.svg' alt='Brand 3' />
        <OneBrand src='/images/logo 04.svg' alt='Brand 4' />
        <OneBrand src='/images/logo 05.svg' alt='Brand 5' />
      </div>
      <div className='flex justify-center gap-5 sm:hidden'>
        <img src='/images/leftArrow.svg' alt='left arrow' />
        <img src='/images/rightArrow.svg' alt='right arrow' />
      </div>
    </div>
  );
}

export default Brands;
