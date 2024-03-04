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

    return (
        <>
            <div className="mt-6 md:mt-0 min-w-[50%] px-2 flex gap-1 lg:gap-2 justify-around lg:justify-start flex-wrap [&>div:first-child]:w-full [&>div:first-child]:max-w-full [&>div:first-child]:aspect-[0.75/1] [&>div:first-child]:mb-4">
                {data.map(({ imgUrl, id }, idx) => (
                    <div
                        key={`food_img_${id}_${idx}`}
                        onClick={() => openModal(id)}
                        className={` w-[80px] lg:w-[120px] aspect-square bg-cover `}
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
                    slidesPerView={1}
                    pagination={true}
                    modules={[Zoom, Navigation, Pagination]}
                    initialSlide={imgInModal ? +imgInModal?.id - 1 : 1}
                    className="relative top-1/2  -translate-y-1/2 w-full md:w-[90vw] lg:w-[70vw] xl:w-[60vw] h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]"
                >
                    {data.map(({ imgUrl, id }, index) => {
                        return (
                            <SwiperSlide
                                key={`img-url-${index}`}
                                className="px-2 w-full md:w-[70vw] h-full lg:w-[70vw] xl:w-[70vw]"
                            >
                                <img
                                    alt={id}
                                    src={imgUrl}
                                    className="w-full h-full aspect-[0.8] lg:aspect-video"
                                />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </Modal>
        </>
    );
};
