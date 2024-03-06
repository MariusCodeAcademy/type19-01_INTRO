// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function SwiperDemo() {
  return (
    <div className='container'>
      <Swiper
        className='pb-20'
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}>
        <SwiperSlide>
          <img src='\images\logo 01.svg' alt='logo' className='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='\images\logo 02.svg' alt='logo' className='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='\images\logo 03.svg' alt='logo' className='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='\images\logo 04.svg' alt='logo' className='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='\images\logo 05.svg' alt='logo' className='' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
