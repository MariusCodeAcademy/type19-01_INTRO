import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../NewArrivals/Cards/Card';
import { A11y, Navigation, Scrollbar } from 'swiper/modules';

const products = [
  {
    id: 1,
    img: '/HomePageImages/5.png',
    price: 349.99,
    rating: 5,
  },
  {
    id: 2,
    img: '/HomePageImages/6.png',
    price: 299.99,
    rating: 5,
  },
  {
    id: 3,
    img: '/HomePageImages/3.png',
    price: 79.99,
    rating: 5,
  },
  {
    id: 4,
    img: '/HomePageImages/4.png',
    price: 224.99,
    rating: 5,
  },
  {
    id: 5,
    img: '/HomePageImages/1.png',
    price: 149.99,
    rating: 5,
  },
];
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
              src='/HomePageImages/notActiveDot.png'
              alt='not active nav dot'
            />
          </span>
          <span>
            <img
              className='w-[18px] h-[18px]'
              src='/HomePageImages/notActiveDot.png'
              alt='not active nav dot'
            />
          </span>
        </div>
      </div>
      {/* virsutinis uzrasas */}
      {/* korteles */}
      <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={'auto'}
        navigation
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        // breakpoints={{
        //   768: {
        //     slidesPerView: 3,
        //   },
        //   1024: {
        //     slidesPerView: 4,
        //   },
        //   1280: {
        //     slidesPerView: 5,
        //   },
        // }}
      >
        {/*  overflow-x-auto */}
        <div className='flex overflow-hidden xl:gap-6 gap-2'>
          {products.map((pObj) => {
            return (
              <SwiperSlide className=''>
                <Card key={pObj.id} price={pObj.price} img={pObj.img} rating={pObj.rating} />
              </SwiperSlide>
            );
          })}
          {/* <SwiperSlide className='w-80'>
            <Card price={349.99} img={'/HomePageImages/5.png'} rating={5} />
          </SwiperSlide>
          <SwiperSlide>
            <Card price={299.99} img={'/HomePageImages/6.png'} rating={2} />
          </SwiperSlide>
          <SwiperSlide>
            <Card price={79.99} img={'/HomePageImages/3.png'} rating={3} />
          </SwiperSlide>
          <SwiperSlide>
            <Card price={224.99} img={'/HomePageImages/4.png'} rating={4} />
          </SwiperSlide>
          <SwiperSlide>
            <Card price={149.99} img={'/HomePageImages/1.png'} rating={5} />
          </SwiperSlide> */}
        </div>
      </Swiper>
      {/* korteles */}
    </div>
  );
}
