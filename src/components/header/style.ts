import clsx from "clsx";

export const getStyles = (isBigMenu: boolean, isReverseAnimate: boolean) => ({
    arrow: clsx(
        "w-[10px] h-[10px]  transition-all duration-500  easy-in right-0  border-b-[4px] border-r-[4px] bg-transparent top-[39%] -mt-[7px]",
        {
            "rotate-[225deg] mt-[4px]  group-hover:border-secondTextHover":
                !isReverseAnimate,
            "rotate-[45deg] ": isReverseAnimate,
        }
    ),
    drop: clsx(
        " absolute top-[100%] justify-between text-start flex gap-1 flex-wrap transition-all duration-300 easy-in-out bg-mainBg p-[20px]",
        { "w-[560px]": isBigMenu, "w-[300px]": !isBigMenu },
        {
            "animate-fadeIn text-white-500": !isReverseAnimate,
            "animate-fadeOut h-0": isReverseAnimate,
        }
    ),
    subCategoryLink: clsx(
        "p-2 text-black hover:text-secondTextHover text-[18px] hover:scale-110 transition-all duration-300 easy-in-out",
        {
            "w-full pl-6": !isBigMenu,
            "w-[48%]": isBigMenu,
        }
    ),
    styleCategory:
        "w-fit gap-2 items-center group flex h-full px-1 transition-all duration-500 easy-in-out hover:text-secondTextHover",
});
