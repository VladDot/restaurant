import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, EffectFade } from 'swiper/modules';
import { clsx } from 'clsx';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { tmpSrc } from './config';

interface IMainBannerProps {
  className?: string;
}

export const MainBanner = ({ className }: IMainBannerProps) => {
  return (
    <>
      <div className='w-full '>
        <Swiper
          loop={true}
          speed={5000}
          effect={'fade'}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, EffectFade]}
          className='mySwiper'
        >
          {tmpSrc.map(({ imgUrl, content, title }, index) => {
            return (
              <SwiperSlide key={`img-url-${index}`}>
                <div
                  style={{ backgroundImage: `url(${imgUrl})` }}
                  className={clsx(
                    `w-full h-full mobile:bg-cover bg-[center] aspect-[0.9] md:aspect-[2.42] relative flex items-center justify-center`,
                    className
                  )}
                >
                  <div className='w-full h-full absolute z-0 bg-black opacity-30 top-0'></div>

                  <div className='container relative z-10 mx-auto p-5p flex flex-col gap-[20px] md:gap-[45px] text-white translate-y-[80px]'>
                    <p className='text-xl text-bannerContent text-[16px] md:text-2xl'>{content}</p>
                    <h2 className='text-4xl md:text-7xl'>
                      {title}, {index + 1}
                    </h2>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};
