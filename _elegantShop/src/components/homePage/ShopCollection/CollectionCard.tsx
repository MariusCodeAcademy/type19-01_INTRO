import { Link } from 'react-router-dom';

interface CollectionCardProps {
  className?: string;
  heading: string;
}

export const CollectionCard = ({ className, heading }: CollectionCardProps) => {
  return (
    <div className={`bg-contain bg-no-repeat max-w-[1120px] ${className}`}>
      <div className='flex flex-col items-start justify-end h-full p-8'>
        <h3 className='text-[28px] font-medium leading-[34px] md:text-[34px] md:leading-[38px] tracking-[-0.6px]'>
          {heading}
        </h3>
        <Link className='cursor-pointer' to='/'>
          <button
            type='button'
            className='mt-2 gap-1 md:text-base md:leading-[28px] text-[14px] leading-[24px] font-medium flex underline underline-offset-2 items-center'
          >
            Collection
            <span className="bg-[url('/src/assets/arrow-right.svg')] inline-block w-4 h-4 bg-contain"></span>
          </button>
        </Link>
      </div>
    </div>
  );
};
