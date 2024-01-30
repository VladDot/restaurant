import clsx from "clsx";

export const getStyles = (isActiveBurger: boolean) => ({
    burgerMenu: clsx(
        "fixed top-0 right-0 transition-all duration-[440ms] h-screen  pt-14",
        {
            " p-5 w-full sm:w-[320px] bg-mainBg": isActiveBurger,
        },
        { "w-0": !isActiveBurger }
    ),
    burgerItems: clsx(
        " flex flex-wrap gap-y-5 text-black overflow-hidden delay-[120ms] ",
        { "w-[95%] ": isActiveBurger },
        { "w-0": !isActiveBurger }
    ),
});

export const getMenuStyles = (isActiveDropdown: boolean) => ({
    dropdown: clsx(
        "items-start text-start flex flex-col transform transition-all duration-500 ease-custom overflow-hidden gap-[8px] pt-[12px] pl-[12px]",
        {
            "": isActiveDropdown,
        },
        { "": !isActiveDropdown }
    ),

    btn: " cursor-pointer text-white text-[18px] font-bold items-center  flex justify-center w-5 h-5 rounded-full bg-black ",
    link: clsx("hover:text-secondTextHover ", {
        "text-secondText ": isActiveDropdown,
        "text-text-black ": !isActiveDropdown,
    }),
});
