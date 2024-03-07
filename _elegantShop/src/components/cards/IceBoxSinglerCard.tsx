type IceBoxSinglerCardProps = {
  img: string;
  title: string;
  info: string;
};

export default function IceBoxSinglerCard({ img, title, info }: IceBoxSinglerCardProps) {
  return (
    <div className=' bg-slate-100 card pl-4 pr-4 pt-8 pb-8  '>
      <img className='mb-4 w-12 h-12 ' src={img} alt={title} />
      <h3 className=' mb-1 font-bold text-sm md:text-xl'>{title}</h3>
      <p className='text-sm'>{info}</p>
    </div>
  );
}
