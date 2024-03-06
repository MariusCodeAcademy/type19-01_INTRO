const Banner = () => {
  return (
    <div style={{ backgroundColor: '#FFDD99' }} className='p-6 bg-gray-100'>
      <div className='max-w-lg mx-auto'>
        <h3
          className='text-xl font-semibold text-gray-800'
          style={{
            color: '#377DFF',
            fontSize: '16px',
            paddingLeft: '32px',
            paddingRight: '32px',
            paddingTop: '24px',
            paddingBottom: '24px',
          }}
        >
          PROMOTION
        </h3>
        <h1
          className='text-3xl font-bold text-gray-900 mb-4 '
          style={{
            fontSize: '36px',
            paddingLeft: '32px',
            paddingRight: '32px',
          }}
        >
          Hurry up! 40% OFF
        </h1>
        <p className='text-gray-700 mb-4 ps-6'>
          Thousands of high tech are waiting for you
        </p>

        <div className='  flex flex-col sm:flex-row justify-between items-center mb-4'>
          <div className='mb-4 p-6 '>
            <h3 className='mr-2 mb-4'>Offer expires in:</h3>
            <div className='flex items-center gap-2'>
              <div className='mr-2 mb-6 mt-4'>
                <span className='font-bold bg-white  text-3xl p-4' id='days'>
                  02
                </span>{' '}
                <p className=' mt-4 text-sm'>Days</p>
              </div>
              <div className='mr-2 mb-6 mt-4'>
                <span className='font-bold bg-white  text-3xl p-4' id='hours'>
                  12
                </span>{' '}
                <p className=' mt-4 text-sm'>Hours</p>
              </div>
              <div className='mr-2 mb-6 mt-4'>
                <span className='font-bold bg-white  text-3xl p-4' id='minutes'>
                  45
                </span>{' '}
                <p className=' mt-4 text-sm'>Minutes</p>
              </div>
              <div className='mr-2 mb-6 mt-4'>
                <span className='font-bold bg-white  text-3xl p-4' id='seconds'>
                  45
                </span>{' '}
                <p className=' mt-4 text-sm'>Seconds</p>
              </div>
            </div>
          </div>
          <button
            className='bg-black text-white px-4 py-2 rounded border-2 border-black hover:bg-gray-800'
            style={{ fontSize: '18px', width: '145px' }}
          >
            Shop now
          </button>
        </div>

        <img
          className='mt-4 w-full block'
          src='/img/Image Placeholder.jpg'
          alt='person'
        />
      </div>
    </div>
  );
};

export default Banner;
