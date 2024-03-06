import Card from '../NewArrivals/Cards/Card';

export default function NewArivals() {
  return (
    <div className='pl-8 xl:ml-40'>
      {/* virsutinis uzrasas */}
      <div className='flex  mr-8 mb-8 mt-8 justify-between items-center xl:mr-40 xl:mb-12  xl:mt-12'>
        <h1 className='text-3xl xl:text-[40px]'>New Arrivals</h1>
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
      <div className='flex overflow-hidden overflow-x-auto xl:gap-6 gap-2'>
        <Card price={'$349.99'} img={'/public/HomePageImages/5.png'} rating={5} />
        <Card price={'$299.99'} img={'/public/HomePageImages/6.png'} rating={2} />
        <Card price={'$79.99'} img={'/public/HomePageImages/3.png'} rating={3} />
        <Card price={'$224.99'} img={'/public/HomePageImages/4.png'} rating={4} />
        <Card price={'$149.99'} img={'/public/HomePageImages/1.png'} rating={5} />
      </div>
      {/* korteles */}
    </div>
  );
}
