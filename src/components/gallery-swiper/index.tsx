import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper/modules";

import { Modal } from "../modal";
import { GalleryCard } from "./gallery-card";

import { interiorGallery } from "../../mock";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

interface IGallerySwiperProps {
    imgList: { imgUrl: string; id: string }[];
}

//TODO  ???  const { innerWidth } = useWidthResize(); don't us  height swiper for out click

export const GallerySwiper: React.FC<IGallerySwiperProps> = ({ imgList }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [openId, setOpenId] = useState<string | undefined>(undefined);

    const imgInModal = interiorGallery.find(({ id }) => id === openId);

    return (
        <section className="container py-10">
            <div className="w-full flex flex-wrap gap-2 lg:gap-5 justify-center items-center ">
                {imgList.map((props, idx) => (
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
                        autoHeight={true}
                        breakpoints={{
                            320: {
                                slidesPerView: "auto",

                                spaceBetween: 15,
                            },
                            768: {
                                spaceBetween: 30,
                                slidesPerView: "auto",
                            },
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 50,
                            },

                            1250: {
                                spaceBetween: 70,
                                slidesPerView: "auto",
                            },
                        }}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: false,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination]}
                        initialSlide={imgInModal ? +imgInModal?.id - 1 : 1}
                        className="relative top-1/2 -translate-y-1/2 "
                    >
                        {imgList.map(({ imgUrl, id }, index) => {
                            return (
                                <SwiperSlide key={`img-url-${index}`}>
                                    <img
                                        alt={id}
                                        src={imgUrl}
                                        className="w-full object-contain h-[80vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]"
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
