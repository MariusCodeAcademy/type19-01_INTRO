type OneBlogCardProps = {
  img: string;
  title: string;
  date: string;
};

function OneBlogCard({ img, title, date }: OneBlogCardProps) {
  return (
    <div>
      <img className='w-full h-3/4 object-cover mb-6' src={img} alt={title} />
      <h3 className='text-xl font-semibold'>{title}</h3>
      <p className='text-xs text-slate-400'>{date}</p>
    </div>
  );
}

export default OneBlogCard;
