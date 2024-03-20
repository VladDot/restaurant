import { useState } from "react";

import { Modal } from "../../modal";
import { getStyles } from "../../style";

interface IImgInteriorProps {
    url: string;
    aspect: string;
    className?: string;
}

export const ImgInterior: React.FC<IImgInteriorProps> = ({
    url,
    aspect,
    className,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAnimations, setIsAnimations] = useState<boolean | undefined>(
        undefined
    );

    const { blureAnimate, pluseAnimate, borderBefore } = getStyles({
        isAnimations,
        className,
        aspect,
    });
    return (
        <>
            <li
                onClick={() => setIsOpen(true)}
                style={{ backgroundImage: `url(${url})` }}
                onMouseMove={() => setIsAnimations(true)}
                onMouseLeave={() => setIsAnimations(false)}
                className={blureAnimate}
            >
                <div className={borderBefore}></div>

                <span className={pluseAnimate}></span>
            </li>
            <Modal
                isOpen={isOpen}
                onClose={setIsOpen}
            >
                <div
                    style={{ backgroundImage: `url(${url})` }}
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] md:w-[70vw]
                        file:${aspect}  lg:w-[80vw] sm:aspect-[1] lg:aspect-[0.5] xl:aspect-[1.8] bg-cover bg-center`}
                />
            </Modal>
        </>
    );
};
