import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import OnPictureSpan from '../UI/OnPictureSpan';
export default function ProductImgSection() {
  return (
    <div className='my-4 mx-9'>
      <div>
        <p className='text-base mb-4 mt-4'>Home &gt; Shop &gt; Living Room &gt; Product</p>
      </div>
      <Swiper navigation={true} modules={[Navigation, FreeMode, Thumbs]}>
        <SwiperSlide>
          <div className='relative group'>
            <img className='w-full' src='/SingleShopPageImg/ProductImg/Paste image.png' alt='' />
            <span className='bg-green-300 text-white rounded-md absolute top-10 left-3   py-1 px-4 text-sm font-bold  leading-4 '>
              -50%
            </span>
            <OnPictureSpan title={'New'} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative group'>
            <img className='w-full' src='/SingleShopPageImg/ProductImg/Stalas 2.png' alt='' />
            <span className='bg-green-300 text-white rounded-md absolute top-10 left-3   py-1 px-4 text-sm font-bold  leading-4 '>
              -50%
            </span>
            <OnPictureSpan title={'New'} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative group'>
            <img className='w-full' src='/SingleShopPageImg/ProductImg/Stalas 3.png' alt='' />
            <span className='bg-green-300 text-white rounded-md absolute top-10 left-3   py-1 px-4 text-sm font-bold  leading-4 '>
              -50%
            </span>
            <OnPictureSpan title={'New'} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative group'>
            <img className='w-full' src='/SingleShopPageImg/ProductImg/Stalas 4.png' alt='' />
            <span className='bg-green-300 text-white rounded-md absolute top-10 left-3   py-1 px-4 text-sm font-bold  leading-4 '>
              -50%
            </span>
            <OnPictureSpan title={'New'} />
          </div>
        </SwiperSlide>
      </Swiper>

      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper w-full hidden md:block'
      >
        <SwiperSlide>
          <img src='/SingleShopPageImg/ProductImg/Stalas 2.png' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/SingleShopPageImg/ProductImg/Stalas 3.png' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/SingleShopPageImg/ProductImg/Stalas 4.png' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
