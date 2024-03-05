import Card from '../NewArrivals/Cards/Card';

export default function NewArivals() {
  return (
    <div className='pl-8'>
      {/* virsutinis uzrasas */}
      <div className='flex border mr-8 mb-8 mt-8 justify-between items-center'>
        <h1 className='text-3xl'>New Arrivals</h1>
        <div className='flex gap-2'>
          <span>
            <img src='/public/HomePageImages/Elements.png' alt='active nav dot' />
          </span>
          <span>
            <img
              className='w-[18px] h-[18px]'
              src='/public/HomePageImages/NotActiveElement.png'
              alt='not active nav dot'
            />
          </span>
          <span>
            <img
              className='w-[18px] h-[18px]'
              src='/public/HomePageImages/NotActiveElement.png'
              alt='not active nav dot'
            />
          </span>
        </div>
      </div>
      {/* virsutinis uzrasas */}
      {/* korteles */}
      <div className='flex overflow-hidden gap-2'>
        <Card price={'$299.99'} img={'/public/HomePageImages/6.png'} />
        <Card price={'$349.99'} img={'/public/HomePageImages/5.png'} />
        <Card price={'$149.99'} img={'/public/HomePageImages/4.png'} />
        <Card price={'$79.99'} img={'/public/HomePageImages/3.png'} />
        <Card price={'$224.99'} img={'/public/HomePageImages/2.png'} />
      </div>
      {/* korteles */}
    </div>
  );
}
