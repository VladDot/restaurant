import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper/modules";

import { Modal } from "../modal";
import { GalleryCard } from "./gallery-card";
import { interiorGallery } from "../../mock";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

export const GallerySwiper = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openId, setOpenId] = useState<string | undefined>(undefined);

    const imgInModal = interiorGallery.find(({ id }) => id === openId);

    return (
        <section className="container py-10">
            <div className="w-full flex flex-wrap gap-2 lg:gap-5 justify-center items-center ">
                {interiorGallery.map((props, idx) => (
                    <GalleryCard
                        {...props}
                        setOpenId={setOpenId}
                        setIsOpen={setIsOpen}
                        key={`gallery_${props.id}_${idx}`}
                    />
                ))}
                <Modal
                    onClose={setIsOpen}
                    isOpen={isOpen && !!imgInModal?.imgUrl}
                >
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={"auto"}
                        spaceBetween={100}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination]}
                        initialSlide={imgInModal ? +imgInModal?.id - 1 : 1}
                        className="relative top-1/2  -translate-y-1/2 flex justify-center items-center max-w-[90vw] "
                    >
                        {interiorGallery.map(({ imgUrl, id }, index) => {
                            return (
                                <SwiperSlide key={`img-url-${index}`}>
                                    <img
                                        alt={id}
                                        src={imgUrl}
                                        className="w-[60vw] aspect-[1.2] xl:aspect-[1]  "
                                    />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </Modal>
            </div>
        </section>
    );
};
