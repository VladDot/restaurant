import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Zoom, Navigation, Pagination } from 'swiper/modules';

import { Modal } from '../../modal';

import { IInteriorGallery } from '../../../mock';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import './style.css';

interface IAboutUsGallery {
  data: IInteriorGallery[];
}

export const AboutUsGallery: React.FC<IAboutUsGallery> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openId, setOpenId] = useState<string | undefined>(undefined);

  const openModal = (id: string) => {
    setOpenId(id);
    setIsOpen(true);
  };

  const imgInModal = data.find(({ id }) => id === openId);

  return (
    <>
      <div className='mt-6 md:mt-0 min-w-[50%] px-2 cursor-pointer flex gap-1 lg:gap-2 justify-around lg:justify-start flex-wrap [&>div:first-child]:w-full [&>div:first-child]:max-w-full [&>div:first-child]:aspect-[0.75/1] [&>div:first-child]:mb-4'>
        {data.map(({ imgUrl, id }, idx) => (
          <div
            key={`food_img_${id}_${idx}`}
            onClick={() => openModal(id)}
            style={{ backgroundImage: `url(${imgUrl})` }}
            className={` w-[80px] lg:w-[120px] aspect-square bg-cover `}
          />
        ))}
      </div>

      <Modal onClose={setIsOpen} isOpen={isOpen && !!imgInModal?.imgUrl}>
        <Swiper
          zoom={true}
          speed={1000}
          navigation={true}
          spaceBetween={15}
          slidesPerView={1}
          pagination={true}
          modules={[Zoom, Navigation, Pagination]}
          initialSlide={imgInModal ? +imgInModal?.id - 1 : 1}
          className='relative top-1/2 -translate-y-1/2 flex items-center justify-center h-full max-h-[80%]'
        >
          {data.map(({ imgUrl, id }, index) => {
            return (
              <SwiperSlide key={`img-url-${index}`} className='flex items-center justify-center'>
                <img alt={id} src={imgUrl} className='max-h-full' />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Modal>
    </>
  );
};
