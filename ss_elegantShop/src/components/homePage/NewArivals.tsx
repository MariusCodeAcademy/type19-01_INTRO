import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../NewArrivals/Cards/Card';
import { A11y, Navigation, Scrollbar } from 'swiper/modules';
import { useState } from 'react';

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
  const [swiperInst, setsSwiperInst] = useState<typeof Swiper | null>(null);

  function testSwiper() {
    if (!swiperInst) return;
    swiperInst.slideNext();
  }

  function swipeBack() {
    if (!swiperInst) return;
    swiperInst.slidePrev();
  }

  return (
    <div className='pl-8 xl:ml-40'>
      {/* virsutinis uzrasas */}
      <div className='flex  mr-8 mb-8 mt-8 justify-between items-center xl:mr-40 xl:mb-12  xl:mt-12'>
        <h1 className='text-3xl xl:text-[40px]'>New Arrivals</h1>
        <div className='flex gap-2'>
          <span onClick={swipeBack}>
            <img src='/HomePageImages/Elements.png' alt='active nav dot' />
          </span>
          <span>
            <img
              className='w-[18px] h-[18px]'
              src='/HomePageImages/notActiveDot.png'
              alt='not active nav dot'
            />
          </span>
          <span onClick={testSwiper}>
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
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => setsSwiperInst(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {/*  overflow-x-auto */}
        <div className='flex overflow-hidden xl:gap-6 gap-2'>
          {products.map((pObj) => {
            return (
              <SwiperSlide key={pObj.id} className='w-[231px] h-[412px] mb-4 md:w-[262px] md:h-[433px]'>
                <Card key={pObj.id} price={pObj.price} img={pObj.img} rating={pObj.rating} />
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
      {/* korteles */}
    </div>
  );
}
