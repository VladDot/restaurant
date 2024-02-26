import { useState } from "react";
import clsx from "clsx";

import { Modal } from "../../modal";

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
    return (
        <>
            <li
                onClick={() => setIsOpen(true)}
                style={{ backgroundImage: `url(${url})` }}
                className={clsx(
                    `relative bg-cover mb-6 items-center flex justify-center transition-all duration-300 easy-in-out group cursor-pointer before:content-['] before:block before:w-full before:h-full before:absolute before:top-0 before:left-0 before:opacity-0 before:bg-black hover:before:animate-blurBlack overflow-hidden`,
                    className,
                    aspect
                )}
            >
                <div className="relative w-[80%] group-hover:w-[80%] h-[100%] before:border-secondTextHover group-hover:border-2 border-secondTextHover group-hover:before:border-2 group-hover:before:border-secondTextHover before:w-[130%]  before:h-[90%] before:contents-'' before:absolute  before:-left-[15%] before:top-[5%] group-hover:before:top-[5%] group-hover:before:-right-[10%]  transition-all easy-in-out before:transition-all group-hover:before:duration-300 group-hover:duration-300 before:easy-in-out group-hover:before:delay-[100ms] duration-0 before:duration-0 group-hover:scale-90 group-hover:before:scale-90 "></div>

                <span className=" absolute w-full h-full after:absolute after:contents-[''] after:block after:w-[40px] after:h-[5px] after:bg-secondText after:top-1/2 after:left-1/2 after:-translate-x-1/2 before:absolute before:contents-[''] before:blok before:w-[40px] before:h-[5px] before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:rotate-90 before:bg-secondText group-hover:animate-scalePluse scale-0"></span>
            </li>
            <Modal
                isOpen={isOpen}
                onClose={setIsOpen}
            >
                <div
                    style={{ backgroundImage: `url(${url})` }}
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] md:w-[70vw]
                      ${aspect}  lg:w-[80vw] sm:aspect-[1] lg:aspect-[0.5] xl:aspect-[1.8] bg-cover bg-center`}
                />
            </Modal>
        </>
    );
};
