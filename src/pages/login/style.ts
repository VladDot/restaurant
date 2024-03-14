import clsx from "clsx";

interface IGetStylesProps {
    isActive?: boolean | undefined;
    isRevers?: boolean | undefined;
}

export const getStyles = ({ isActive, isRevers }: IGetStylesProps) => {
    console.log(isRevers, "7");
    return {
        btnStyle: clsx(
            "relative w-full p-2 px-4 transition-all duration-700 ease-out top-[-2px] mb-5",
            {
                "before:w-0 bg-black shadow-aqua shadowBtn": isActive,
                " before:w-full bg-secondText active:top-[2px] ": !isActive,
            }
        ),
        textStyle: clsx("font-bold transition-all duration-700 ease-out", {
            "text-secondText": isActive,
            "text-black": !isActive,
        }),
        reversStyle: clsx(
            "relative h-[550px] duration-500 ease-out transformStyle",
            {
                "animate-reversRotateY": isRevers === true,
                "animate-rotateY ": isRevers === false,
            }
        ),
    };
};
