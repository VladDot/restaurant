import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { IInteriorGallery } from "../../../mock";

import { Modal } from "../../modal";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
                    loop={true}
                    speed={1000}
                    spaceBetween={30}
                    pagination={true}
                    effect={"fade"}
                    grabCursor
                    modules={[Navigation, Pagination]}
                    navigation={true}
                    className="relative top-1/2 -translate-y-1/2 mySwiper max-w-[90vw]"
                >
                    {data.map(({ imgUrl, id }, index) => {
                        return (
                            <SwiperSlide key={`img-url-${index}`}>
                                <img
                                    src={imgUrl}
                                    alt={id}
                                    className="block w-full aspect-square lg:aspect-video object-contain"
                                />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </Modal>
        </>
    );
};