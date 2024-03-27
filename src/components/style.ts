import clsx from "clsx";

interface IGetStylesProps {
    className?: string | undefined;
    aspect?: string;
    isAnimations?: boolean | undefined;
    isBluerAnimate?: boolean | undefined;
}

export const getStyles = ({
    className,
    aspect,
    isAnimations,
    isBluerAnimate,
}: IGetStylesProps) => {
    return {
        bluerAnimate: clsx(
            `relative bg-cover mb-6 items-center flex justify-center transition-all duration-300 easy-in-out group cursor-pointer before:content-['] before:block before:w-full before:h-full before:absolute before:top-0 before:left-0 before:opacity-0 before:bg-black overflow-hidden group-hover:duration-300 `,
            className,
            aspect,
            {
                "before:animate-blurBlack": isAnimations === true,
                "before:animate-blurBlackReverse": isAnimations === false,
            }
        ),
        plusAnimate: clsx(
            " w-full h-full absolute after:absolute after:contents-[''] after:block  after:bg-secondText after:top-1/2 after:left-1/2 after:-translate-x-1/2 before:absolute before:contents-[''] before:blok before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:rotate-90 before:bg-secondText ",
            {
                "animate-scalePlus after:w-[40px] after:h-[5px]  before:w-[40px] before:h-[5px]":
                    isAnimations === true,
                "animate-scalePlusReverse after:w-[40px] after:h-[5px]  before:w-[40px] before:h-[5px]":
                    isAnimations === false,
            }
        ),
        bluerAnimateFoodMenu: clsx(
            "absolute transition-all duration-700 easy-in-out bg-black cursor-pointer w-full h-full top-0 left-0 opacity-20",
            {
                "animate-blurBlack": isBluerAnimate === true,

                "animate-blurBlackReverse": isBluerAnimate === false,
            }
        ),
        emergingContent: clsx(
            "absolute w-full flex flex-col justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
            {
                "animate-fadeIn ": isBluerAnimate,
                "animate-fadeOut": !isBluerAnimate,
            }
        ),

        borderBefore: clsx(
            'relative w-[80%]  h-[100%] before:border-secondTextHover  border-secondTextHover before:border-secondTextHover before:w-[130%]  before:h-[90%] before:contents-["] before:absolute  before:-left-[15%] before:top-[5%] transition-all easy-in-out before:transition-all  duration-300 before:easy-in-out  before:duration-300    ',
            {
                "border-2 before:border-2 before:top-[5%] before:-right-[10%] before:duration-300 before:delay-[100ms] scale-90 before:scale-90 opacity-100":
                    isAnimations,
                "border-0 before:border-0 duration-300 opacity-0 ":
                    !isAnimations,
            }
        ),
    };
};
