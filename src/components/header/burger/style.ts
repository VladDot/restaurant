import clsx from "clsx";

export const getStyles = (isActiveBurger: boolean) => ({
    burgerMenu: clsx(
        "fixed top-0 right-0 transition-all duration-[320ms] h-screen p-5 pt-14",
        {
            "w-[320px] bg-blue-500": isActiveBurger,
        },
        { "w-0": !isActiveBurger }
    ),
    burgerItems: clsx(
        " flex flex-wrap text-green-500 gap-y-5 overflow-hidden delay-[120ms]",
        { "w-[95%] ": isActiveBurger },
        { "w-0": !isActiveBurger }
    ),
});

export const getMenuStyles = (isActiveDropdown: boolean) => ({
    dropdown: clsx(
        "items-start  flex flex-col ",
        { "h-fit text-black": isActiveDropdown },
        { hidden: !isActiveDropdown }
    ),
});
