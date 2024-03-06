export default function OneTimerCountST({ time, count }: { time: string; count: number }) {
  return (
    <div className='one-count mt-2 grid items-center justify-center'>
      <div className='count bg-white w-16 h-16 flex items-center justify-center'>
        <p className='text-4xl font-semibold'>{count}</p>
      </div>
      <p className='text-xs text-center'>{time}</p>
    </div>
  );
}
