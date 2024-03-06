import React, { useEffect, useState } from 'react';

const TimeUntilMK = () => {
  const [timeNow, setTimeNow] = useState(new Date());

  // jei skaiciuojam skirtuma tarp 2 datu
  // pasiversti abi data i ms ir atimti is vieno kita

  const dateUntil = new Date('2024-03-16');

  // const skirtumasMs = dateUntil.getTime() - timeNow.getTime();

  // const dienuSkirtumas = Math.floor(skirtumasMs / (1000 * 60 * 60 * 24));

  // console.log('dienuSkirtumas ===', dienuSkirtumas);

  type DurationReturnType = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };

  const durationToTime = (timeString: string): DurationReturnType => {
    const untilDate = new Date(timeString);
    const skirtumasMs = untilDate.getTime() - timeNow.getTime();

    const msInADay = 1000 * 60 * 60 * 24;

    const daysFull = skirtumasMs / msInADay; // 5.5
    const days = Math.floor(skirtumasMs / msInADay); // 5

    const valanduLiekana = daysFull - days; // 0.55
    const hoursFull = valanduLiekana * 24; // 6,5
    const hours = Math.floor(hoursFull); // 6

    const minuciuLiekana = hoursFull - hours; // 0.55
    const minutesFull = minuciuLiekana * 60; // 33.54
    const minutes = Math.floor(minutesFull); // 33

    const secLiekana = minutesFull - minutes; // .54
    const secFull = secLiekana * 60; // 34.545
    const sec = Math.floor(secFull); // 34

    // console.log('sec ===', sec);

    // console.log('minutes ===', minutes);
    // console.log('minutesFull ===', minutesFull);

    // console.log('hoursFull ===', hoursFull);
    // console.log('hours ===', hours);
    // console.log('dienuLiekana ===', valanduLiekana);
    // console.log(' daysFull; ===', daysFull);
    // console.log('days ===', days);
    return {
      days,
      hours,
      minutes,
      seconds: sec,
    };
  };
  const rez = durationToTime('2024-03-16');

  console.log('rez ===', rez);

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
      // tick();
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
