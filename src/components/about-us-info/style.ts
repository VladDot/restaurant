import clsx from "clsx";

export const getStyles = (isActive: boolean) => ({
    continueText: clsx(
        " z-2 text-[13px] py-1 md:before:hidden text-fourth before:bg-bottomShadow before:transition-all before:absolute before:block before:w-full before:bottom-0 before:left-0",
        {
            "before:h-[25%] ": !isActive,
            "before:h-0": isActive,
        }
    ),
});
