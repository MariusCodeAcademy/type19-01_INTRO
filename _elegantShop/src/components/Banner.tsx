const Banner = () => {
  return (
    <div className='bg-yellow-200'>
      <div className=' mx-auto flex flex-col md:flex-row md:justify-between items-center'>
        <div className='w-full md:w-1/2 md:order-last p-6'>
          <h3 className='text-xl font-semibold text-blue-500 md:pt-6 md:pb-6'>
            PROMOTION
          </h3>
          <h1 className='md:text-xxl text-3xl font-bold text-gray-900 mb-4'>
            Hurry up! 40% OFF
          </h1>
          <p className='text-gray-700 mb-4'>
            Thousands of high tech are waiting for you
          </p>
          <div className='flex items-center gap-2'>
            <div className='mr-2 mb-6 mt-4'>
              <span className='font-bold bg-white text-3xl p-4' id='days'>
                02
              </span>{' '}
              <p className='mt-4 text-sm'>Days</p>
            </div>
            <div className='mr-2 mb-6 mt-4'>
              <span className='font-bold bg-white text-3xl p-4' id='hours'>
                12
              </span>{' '}
              <p className='mt-4 text-sm'>Hours</p>
            </div>
            <div className='mr-2 mb-6 mt-4'>
              <span className='font-bold bg-white text-3xl p-4' id='minutes'>
                45
              </span>{' '}
              <p className='mt-4 text-sm'>Minutes</p>
            </div>
            <div className='mr-2 mb-6 mt-4'>
              <span className='font-bold bg-white text-3xl p-4' id='seconds'>
                45
              </span>{' '}
              <p className='mt-4 text-sm'>Seconds</p>
            </div>
          </div>
          <button className='mb-2 bg-black text-white px-4 py-2 rounded border-2 border-black hover:bg-gray-800'>
            Shop now
          </button>
        </div>
        <div className='flex flex-col md:flex-row items-center'>
          <img
            className='w-full h-auto md:h-[750px] object-cover'
            src='/img/Image Placeholder.jpg'
            alt='Modern building architecture'
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
