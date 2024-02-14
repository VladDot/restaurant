import { FC } from "react";

export interface IExpandingElement {
    Svg: React.FC;
    text: string;
    className: string;
}

export const ExpandingElement: FC<IExpandingElement> = ({
    Svg,
    text,
    className,
}) => {
    return (
        <div
            className={`cursor-default w-1/4 last:w-full odd:bg-bgA78963 last:!bg-thirdBg even:bg-thirdBg p-[30px] group hover:!bg-black ${className} transition-all duration-500 easy-in-out`}
        >
            <div className=" flex flex-col justify-center items-center ">
                <div className="w-[60px] fill-white group-hover:fill-secondTextHover duration-300">
                    <Svg />
                </div>
                <h2 className="text-[24px] text-center whitespace-pre-line leading-7 max-w-[340px] group-hover:text-secondTextHover duration-300 easy-in-out text-white">
                    {text}
                </h2>
            </div>
        </div>
    );
};
