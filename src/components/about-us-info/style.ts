import clsx from "clsx";

export const getStyles = (isActive: boolean) => ({
    continueText: clsx(
        " z-2 md:before:hidden before:bg-bottomShadow before:transition-all before:absolute before:block before:w-full before:bottom-0 before:left-0",
        {
            "before:h-[30%] ": !isActive,
            "before:h-0": isActive,
        }
    ),
});
