import { useState } from "react";

import { Modal } from "../../modal";
import { getStyles } from "../../style";
/* import { useAspectRatio } from "../../../hook";
 */ import clsx from "clsx";

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
        isAnimations,
        className,
        aspect,
    });
    /*     const { isToggler, reverseAspect } = useAspectRatio();
    console.log(reverseAspect, "sdfghjkl;lkjhg");

    const aspectRatio = isToggler;
    const barada = `aspect-[${reverseAspect}]`;
    console.log(aspectRatio);
 */
    return (
        <>
            <li
                onClick={() => setIsOpen(true)}
                style={{ backgroundImage: `url(${url})` }}
                onMouseMove={() => setIsAnimations(true)}
                onMouseLeave={() => setIsAnimations(false)}
                className={bluerAnimate}
            >
                <div className={borderBefore}></div>

                <span className={plusAnimate}></span>
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
