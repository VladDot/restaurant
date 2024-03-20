import { useState } from "react";
import { getStyles } from "../style";

interface IGalleryCardProps {
    id: string;
    imgUrl: string;
    setIsOpen: any;
    setOpenId: any;
}

export const GalleryCard: React.FC<IGalleryCardProps> = ({
    id,
    imgUrl,
    setOpenId,
    setIsOpen,
}) => {
    const [isAnimations, setIsAnimations] = useState<undefined | boolean>(
        undefined
    );
    const { plusAnimate, bluerAnimateGallery, border } = getStyles({
        isAnimations,
    });
    const openModal = (id: string) => {
        setOpenId(id);
        setIsOpen(true);
    };
    return (
        <div
            onClick={() => openModal(id)}
            onMouseMove={() => setIsAnimations(true)}
            onMouseLeave={() => setIsAnimations(false)}
            className="relative max-w-[45%] group sm:max-w-[250px] lg:max-w-[300px] xl:max-w-[350px] transition-all duration-300 easy-in-out cursor-zoom-in"
        >
            <img
                alt={id}
                src={imgUrl}
                className=" aspect-[1.4]"
            />
            <div className={bluerAnimateGallery} />
            <div className={border} />
            <span className={plusAnimate} />
        </div>
    );
};
