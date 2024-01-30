import clsx from "clsx";

export const getStyles = (isActive: boolean) => ({
    arrow: clsx(
        "w-[10px] h-[10px]  transition-all duration-500 right-0  border-b-[4px] border-r-[4px] bg-transparent top-[39%] -mt-[7px]",
        {
            "rotate-[225deg] mt-[4px]  group-hover:border-secondTextHover":
                isActive,
            "rotate-[45deg]": !isActive,
        }
    ),
    drop: clsx(
        "absolute top-[100%] flex flex-wrap  flex-col justify-between w-fit max-h-[290px] whitespace-nowrap text-start bg-mainBg overflow-hidden p-[20px]",
        {
            "": isActive,
            hidden: !isActive,
        }
    ),
});
