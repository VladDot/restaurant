import clsx from "clsx";

export const getStyles = (isActive: boolean, isBigMenu: boolean) => ({
    arrow: clsx(
        "w-[10px] h-[10px]  transition-all duration-500 right-0  border-b-[4px] border-r-[4px] bg-transparent top-[39%] -mt-[7px]",
        {
            "rotate-[225deg] mt-[4px]  group-hover:border-secondTextHover":
                isActive,
            "rotate-[45deg]": !isActive,
        }
    ),
    drop: clsx(
        "animate-fadeIn absolute top-[100%] justify-between text-start flex gap-1 flex-wrap transition-all duration-300 easy-in-out bg-mainBg p-[20px]",
        { "w-[560px]": isBigMenu, "w-[300px]": !isBigMenu },
        { "fadeInDropMenu text-white-500": isActive, "h-0": !isActive }
    ),
    subCategoryLink: clsx(
        "p-2 text-black hover:text-secondTextHover text-[18px] hover:scale-110 transition-all duration-300 easy-in-out",
        {
            "w-full pl-6": !isBigMenu,
            "w-[48%]": isBigMenu,
        }
    ),
});
