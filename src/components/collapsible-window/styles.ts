import clsx from "clsx";

export const getStyles = (isActive: boolean, className?: string) => ({
    wrapper: clsx(
        "overflow-hidden md:block transition-all duration-300 ease-custom",
        className
    ),
});
