import { FC, useRef } from "react";
import clsx from "clsx";

import { useVisibleElement } from "../../hook";

export interface IExpandingElement {
    text: string;
    Svg: React.FC;
    className?: string;
    classNameText?: string;
}

export const ExpandingElement: FC<IExpandingElement> = ({
    Svg,
    text,
    className,
    classNameText,
}) => {
    const elementRef = useRef<HTMLDivElement>(null);

    const { isVisible } = useVisibleElement({ elementRef });

    return (
        <div
            ref={elementRef}
            className={clsx(
                `cursor-default  w-full lg:w-1/4 last:w-full odd:bg-fourthBg lg:last:!bg-thirdBg even:bg-thirdBg p-[30px] group hover:!bg-black ${className} transition-all duration-500 easy-in-out `,
                {
                    "scale-100 animate-fadeIn duration-700": isVisible,
                    "scale-0 ": !isVisible,
                }
            )}
        >
            <div className=" flex flex-col justify-center items-center  ">
                <div className="w-[60px] fill-white group-hover:fill-secondTextHover duration-300">
                    <Svg />
                </div>

                <h2
                    className={`text-[24px] text-center whitespace-pre-line leading-7  lg:max-w-[250px]   group-hover:text-secondTextHover duration-300 easy-in-out text-white ${classNameText}`}
                >
                    {text}
                </h2>
            </div>
        </div>
    );
};
