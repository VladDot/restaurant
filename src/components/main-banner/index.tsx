import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, EffectFade } from 'swiper/modules';
import { clsx } from 'clsx';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { tmpSrc } from '../../mock';
import { SubTitle, Title } from '../../components';

interface IMainBannerProps {
  className?: string;
}

export const MainBanner = ({ className }: IMainBannerProps) => {
  return (
    <div className='w-full h-[100vh]'>
      <Swiper
        loop={true}
        speed={6000}
        effect={'fade'}
        allowTouchMove={false}
        autoplay={{
          delay: 1500,
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
                  `w-full mobile:bg-cover bg-[center] h-[100vh] relative flex items-center justify-center`,
                  className
                )}
              >
                <div className='w-full absolute z-0 bg-black opacity-30 top-0'></div>

                <div className='container relative z-10 mx-auto p-5 flex flex-col gap-[20px] md:gap-[45px] text-white translate-y-[80px]'>
                  <Title
                    uppercase
                    text={title}
                    className='text-xl text-start text-bannerContent text-[16px] md:text-2xl'
                  />

                  <SubTitle
                    text={content}
                    className='text-start max-w-[690px] text-subTitleClamp font-thirdFont'
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
