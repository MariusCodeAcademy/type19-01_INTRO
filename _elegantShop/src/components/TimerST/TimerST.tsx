import { useEffect, useState } from 'react';
import OneTimerCountST from './OneTimerCountST';

export default function TimerST() {
  const [timeRemaining, setTimeRemaining] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const finishDate = new Date('2024-04-15, 23:59:59');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const difference = finishDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeRemaining({ days, hours, minutes, seconds });
      } else {
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });

        // Isvalo intervala kai pasibaige laikas
        clearInterval(intervalId);
      }
    }, 1000);

    // Isvalo intervala
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='container w-80 bg-[rgba(255,171,0,0.64)] pt-3 pb-3'>
      <p>Offer expires in:</p>
      <div className='count-container grid grid-cols-4 gap-2'>
        <OneTimerCountST time='Days' count={timeRemaining.days} />
        <OneTimerCountST time='Hours' count={timeRemaining.hours} />
        <OneTimerCountST time='Minutes' count={timeRemaining.minutes} />
        <OneTimerCountST time='Seconds' count={timeRemaining.seconds} />
      </div>
    </div>
  );
}
