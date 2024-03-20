import clsx from "clsx";

interface IgetStylesProps {
    className?: string | undefined;
    aspect?: string;
    isAnimations: boolean | undefined;
}

export const getStyles = ({
    className,
    aspect,
    isAnimations,
}: IgetStylesProps) => {
    return {
        blureAnimate: clsx(
            `relative bg-cover mb-6 items-center flex justify-center transition-all duration-300 easy-in-out group cursor-pointer before:content-['] before:block before:w-full before:h-full before:absolute before:top-0 before:left-0 before:opacity-0 before:bg-black overflow-hidden group-hover:duration-300 `,
            className,
            aspect,
            {
                "before:animate-blurBlack": isAnimations,
                "before:animate-blurBlackReverse": !isAnimations,
            }
        ),
        pluseAnimate: clsx(
            " absolute w-full h-full after:absolute after:contents-[''] after:block after:w-[40px] after:h-[5px] after:bg-secondText after:top-1/2 after:left-1/2 after:-translate-x-1/2 before:absolute before:contents-[''] before:blok before:w-[40px] before:h-[5px] before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:rotate-90 before:bg-secondText  scale-0 ",
            {
                "animate-scalePluse": isAnimations,
                "animate-scalePluseReverse": !isAnimations,
            }
        ),
        borderBefore:
            "relative w-[80%] group-hover:w-[80%] h-[100%] before:border-secondTextHover group-hover:border-2 border-secondTextHover group-hover:before:border-2 group-hover:before:border-secondTextHover before:w-[130%]  before:h-[90%] before:contents-'' before:absolute  before:-left-[15%] before:top-[5%] group-hover:before:top-[5%] group-hover:before:-right-[10%]  transition-all easy-in-out before:transition-all group-hover:before:duration-300 group-hover:duration-300 before:easy-in-out group-hover:before:delay-[100ms] before:duration-300 group-hover:scale-90 group-hover:before:scale-90 border-0 before:border-0 duration-300 opacity-0  group-hover:opacity-100",
    };
};
