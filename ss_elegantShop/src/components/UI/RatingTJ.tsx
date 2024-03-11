type RatingTJProps = {
  rating: number;
};

export default function RatingTJ({ rating }: RatingTJProps) {
  const stars = [];

  for (let i = 0; i < rating; i++) {
    stars.push(
      <span key={i}>
        <img src='/public/HomePageImages/Star Icon.png' alt='star icon' />
      </span>
    );
  }

  return <div className='flex mt-3 mb-1'>{stars}</div>;
}
