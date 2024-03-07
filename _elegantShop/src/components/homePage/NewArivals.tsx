import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../NewArrivals/Cards/Card';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';

export default function NewArivals() {
  return (
    <div className='pl-8 xl:ml-40'>
      {/* virsutinis uzrasas */}
      <div className='flex  mr-8 mb-8 mt-8 justify-between items-center xl:mr-40 xl:mb-12  xl:mt-12'>
        <h1 className='text-3xl xl:text-[40px]'>New Arrivals</h1>
        <div className='flex gap-2'>
          <span>
            <img src='/HomePageImages/Elements.png' alt='active nav dot' />
          </span>
          <span>
            <img
              className='w-[18px] h-[18px]'
              src='/HomePageImages/NotActiveElement.png'
              alt='not active nav dot'
            />
          </span>
          <span>
            <img
              className='w-[18px] h-[18px]'
              src='/HomePageImages/NotActiveElement.png'
              alt='not active nav dot'
            />
          </span>
        </div>
      </div>
      {/* virsutinis uzrasas */}
      {/* korteles */}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
      >
        {/*  overflow-x-auto */}
        <div className='flex overflow-hidden xl:gap-6 gap-2'>
          <SwiperSlide>
            <Card price={'$349.99'} img={'/HomePageImages/5.png'} rating={5} />
          </SwiperSlide>
          <SwiperSlide>
            <Card price={'$299.99'} img={'/HomePageImages/6.png'} rating={2} />
          </SwiperSlide>
          <SwiperSlide>
            <Card price={'$79.99'} img={'/HomePageImages/3.png'} rating={3} />
          </SwiperSlide>
          <SwiperSlide>
            <Card price={'$224.99'} img={'/HomePageImages/4.png'} rating={4} />
          </SwiperSlide>
          <SwiperSlide>
            <Card price={'$149.99'} img={'/HomePageImages/1.png'} rating={5} />
          </SwiperSlide>
        </div>
      </Swiper>
      {/* korteles */}
    </div>
  );
}
