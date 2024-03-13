import clsx from "clsx";

export const getStyles = (
    isActive?: boolean | undefined,
    isRevers?: boolean
) => {
    console.log(isRevers, "6");
    console.log(isActive, "7");
    return {
        btnStyle: clsx(
            "relative w-full p-2 px-4 transition-all duration-700 ease-out top-[-2px] mb-5",
            {
                "before:w-0 bg-secondText": isActive,
                " before:w-full bg-black active:top-[2px] ": !isActive,
            }
        ),
        textStyle: clsx("font-bold transition-all duration-700 ease-out", {
            "text-black": isActive,
            "text-secondText": !isActive,
        }),
        reversStyle: clsx("relative h-[550px] duration-500 ease-out", {
            "animate-rotateY ": isRevers === false,
            "animate-reversRotateY": isRevers === true,
        }),
    };
};
