import React, { useEffect, useState } from 'react';

const TimeUntilMK = () => {
  const [timeNow, setTimeNow] = useState(new Date());

  let hours = timeNow.getHours();
  let minutes = timeNow.getMinutes();
  let seconds = timeNow.getSeconds();

  const tick = () => {
    setTimeNow(new Date());
    console.log('tick');
    hours = timeNow.getHours();
    minutes = timeNow.getMinutes();
    seconds = timeNow.getSeconds();
  };

  useEffect(() => {
    const myInterval = setInterval(() => {
      tick();
    }, 1000);

    return () => {
      // kodas kuris vyk sunaikinat komoonenta
      clearInterval(myInterval);
    };
  }, []);

  console.log('timeNow ===', timeNow);

  return (
    <div className=' bg-yellow-300  flex flex-col sm:flex-row justify-between items-center mb-4'>
      <div className='mb-4 p-6 '>
        <h3 className='mr-2 mb-4'>Offer expires in: </h3>
        <div className='flex items-center gap-2'>
          <div className='mr-2 mb-6 mt-4'>
            <span className='font-bold bg-white  text-3xl p-4' id='days'>
              02
            </span>{' '}
            <p className=' mt-4 text-sm'>Days</p>
          </div>
          <div className='mr-2 mb-6 mt-4'>
            <span className='font-bold bg-white  text-3xl p-4' id='hours'>
              {hours}
            </span>{' '}
            <p className=' mt-4 text-sm'>Hours</p>
          </div>
          <div className='mr-2 mb-6 mt-4'>
            <span className='font-bold bg-white  text-3xl p-4' id='minutes'>
              {minutes}
            </span>{' '}
            <p className=' mt-4 text-sm'>Minutes</p>
          </div>
          <div className='mr-2 mb-6 mt-4'>
            <span className='font-bold bg-white  text-3xl p-4' id='seconds'>
              {seconds}
            </span>{' '}
            <p className=' mt-4 text-sm'>Seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeUntilMK;
