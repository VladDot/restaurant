import { useState } from "react";

import clsx from "clsx";

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

    const { bluerAnimate, plusAnimate, borderBefore } = getStyles({
        aspect,
        className,
        isAnimations,
    });

    return (
        <>
            <li
                className={bluerAnimate}
                onClick={() => setIsOpen(true)}
                onMouseMove={() => setIsAnimations(true)}
                style={{ backgroundImage: `url(${url})` }}
                onMouseLeave={() => setIsAnimations(false)}
            >
                <div className={borderBefore} />

                <span className={plusAnimate} />
            </li>
            <Modal
                isOpen={isOpen}
                onClose={setIsOpen}
            >
                <div
                    className={clsx(
                        ` absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 max-w-[80vw]  md:max-w-[80vw]  lg:max-w-[60vw]  w-full`,
                        aspect
                    )}
                >
                    <img
                        src={url}
                        alt={url}
                        className={` w-full object-contain`}
                    />
                </div>
            </Modal>
        </>
    );
};
