import Button from '../UI/Button';

function Hero() {
  return (
    <div className='relative bg-main'>
      <div className='grid md:grid-cols-2 md:max-w-7xl md:mx-auto'>
        <img
          src='/img/man-full.png'
          alt='laughing man'
          className='w-full h-full object-cover hidden sm:block col-start-1 col-end-3 row-start-1 row-end-2'
        />
        <div className='text-center sm:text-left z-10 relative row-start-1 row-end-2 col-start-2 col-end-3 self-center'>
          <div className='w-[311px] md:w-auto md:text-left'>
            <h1 className='text-4xl md:text-5xl lg:text-7xl font-medium mb-2 '>
              Listen to <br /> the <span className='text-blue-500'>amazing</span> <br /> music
              sound.
            </h1>
            <p className='text-base sm:text-sm font-normal leading-[26px] mb-3 md:text-[20px] md:leading-[32px]'>
              Experience music like never before
            </p>
            <Button>Shopping Now</Button>
          </div>
        </div>
      </div>
      <img
        src='/img/man.png'
        alt='laughing man'
        className='mx-auto object-cover  sm:hidden -mt-72'
      />
    </div>
  );
}

export default Hero;
