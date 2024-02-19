import React, { useState } from "react";
import { IInteriorGallery } from "../../../mock";
import { Modal } from "../../modal";

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
            <div className="mt-6 min-w-[50%] flex flex-wrap [&>div:first-child]:w-full [&>div:first-child]:aspect-[0.75/1] [&>div:first-child]:mb-4">
                {data.map(({ imgUrl, id }, idx) => (
                    <div
                        key={`food_img_${id}_${idx}`}
                        onClick={() => openModal(id)}
                        className={` w-14 aspect-[1] bg-cover `}
                        style={{ backgroundImage: `url(${imgUrl})` }}
                    />
                ))}
            </div>

            <Modal
                onClose={setIsOpen}
                isOpen={isOpen && !!imgInModal?.imgUrl}
            >
                <div
                    style={{
                        backgroundImage: `url(${imgInModal?.imgUrl})`,
                    }}
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] md:w-[70vw] xl:aspect-[1.5] 
                    lg:w-[60vw] lg:aspect-[1]  bg-cover bg-center `}
                />
            </Modal>
        </>
    );
};
