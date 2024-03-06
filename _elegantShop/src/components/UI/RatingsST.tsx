import { useState } from 'react';

type StareArrType = number[];
const starArr: StareArrType = [0, 1, 2, 3, 4];

export default function RatingsST() {
  const [selectedStars, setSelectedStars] = useState<number>(0);

  const handleStarClick = (index: number) => {
    setSelectedStars(index + 1);
  };

  return (
    <div className='flex gap-1'>
      {starArr.map((sId) => (
        <img
          key={sId}
          className={`h-4 w-4 cursor-pointer ${sId < selectedStars ? 'opacity-100' : 'opacity-50'}`}
          src='/public/Star Fill.png'
          alt='star icon'
          onClick={() => handleStarClick(sId)}
        />
      ))}
    </div>
  );
}
