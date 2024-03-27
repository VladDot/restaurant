import clsx from "clsx";

interface IGetStylesProps {
    className?: string | undefined;
    aspect?: string;
    isAnimations?: boolean | undefined;
    isBluerAnimate?: boolean | undefined;
}

export const getStyles = ({ isAnimations }: IGetStylesProps) => {
    return {
        plusAnimate: clsx(
            "absolute after:absolute  before:absolute w-full h-full top-0 left-0  after:bg-secondText after:top-1/2 after:left-1/2 after:-translate-x-1/2 before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:rotate-90 before:bg-secondText ",
            {
                "animate-scalePlus after:w-[40px] after:h-[5px] before:w-[40px] before:h-[5px]":
                    isAnimations === true,
                "animate-scalePlusReverse after:w-[40px] after:h-[5px] before:w-[40px] before:h-[5px]":
                    isAnimations === false,
            }
        ),
        bluerAnimateGallery: clsx(
            "absolute transition-all duration-700 easy-in-out bg-black cursor-pointer w-full h-full top-0 left-0 opacity-20 z-0",
            {
                "animate-blurBlack": isAnimations === true,
                "animate-blurBlackReverse": isAnimations === false,
            }
        ),

        border: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:w-[80%] w-[80%] h-[100%] before:border-secondTextHover group-hover:border-2 border-secondTextHover group-hover:before:border-2 group-hover:before:border-secondTextHover before:w-[130%]  before:h-[90%] before:contents-'' before:absolute  before:-left-[15%] before:top-[5%] group-hover:before:top-[5%] group-hover:before:-right-[10%]  transition-all easy-in-out before:transition-all group-hover:before:duration-300 group-hover:duration-300 before:easy-in-out group-hover:before:delay-[100ms] duration-300 before:duration-300 group-hover:scale-90 group-hover:before:scale-90 opacity-0 group-hover:opacity-100 ",
    };
};
