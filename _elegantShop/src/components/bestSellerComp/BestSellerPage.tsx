import BestSellerList from './BestSellerList';

export default function BestSellerPage() {
  return (
    <div className='mx-auto max-w-[1440px] min-w-[375px]'>
      <div className='lg:w-[1120px] sm:w-[312px] mx-auto'>
        <h2 className='text-4xl font-medium'>Best Seller</h2>
        <BestSellerList />
      </div>
    </div>
  );
}
