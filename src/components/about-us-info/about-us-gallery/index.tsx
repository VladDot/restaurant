import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Zoom, Navigation, Pagination } from "swiper/modules";

import { Modal } from "../../modal";

import { IInteriorGallery } from "../../../mock";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import "./style.css";

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
    console.log(imgInModal?.id);

    return (
        <>
            <div className="mt-6 md:mt-0 min-w-[50%] flex gap-1 lg:gap-2 justify-around lg:justify-start flex-wrap [&>div:first-child]:w-full [&>div:first-child]:max-w-full [&>div:first-child]:aspect-[0.75/1] [&>div:first-child]:mb-4">
                {data.map(({ imgUrl, id }, idx) => (
                    <div
                        key={`food_img_${id}_${idx}`}
                        onClick={() => openModal(id)}
                        className={` w-[80px] aspect-[1] bg-cover `}
                        style={{ backgroundImage: `url(${imgUrl})` }}
                    />
                ))}
            </div>

            <Modal
                onClose={setIsOpen}
                isOpen={isOpen && !!imgInModal?.imgUrl}
            >
                <Swiper
                    zoom={true}
                    speed={1000}
                    navigation={true}
                    spaceBetween={15}
                    pagination={true}
                    modules={[Zoom, Navigation, Pagination]}
                    initialSlide={imgInModal ? +imgInModal?.id - 1 : 1}
                    className="relative top-1/2  -translate-y-1/2 flex justify-center items-center max-w-[90vw] mySwiper"
                >
                    {data.map(({ imgUrl, id }, index) => {
                        return (
                            <SwiperSlide key={`img-url-${index}`}>
                                <img
                                    alt={id}
                                    src={imgUrl}
                                    className="w-[80vw] aspect-[1.5] xl:aspect-[1] object-contain"
                                />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </Modal>
        </>
    );
};
