import clsx from "clsx";

export const getStyles = (isActiveBurger: boolean) => ({
    burgerMenu: clsx(
        "fixed top-0 right-0 transition-all duration-[440ms] h-screen  py-14",
        {
            " p-5 w-full sm:w-[320px] bg-mainBg": isActiveBurger,
            "w-0": !isActiveBurger,
        }
    ),
});

export const getMenuStyles = (isActiveDropdown: boolean) => ({
    dropdown: clsx(
        "items-start text-start flex flex-col transform transition-all duration-500 ease-custom overflow-hidden gap-[8px] pl-[12px]",
        {
            "pt-[12px] ": isActiveDropdown,
            "pt-0 ": !isActiveDropdown,
        }
    ),

    btn: " cursor-pointer text-white text-[18px] font-bold items-center  flex justify-center w-5 h-5 rounded-full bg-black ",
    link: clsx("hover:text-secondTextHover w-full text-left", {
        "text-secondText ": isActiveDropdown,
        "text-text-black ": !isActiveDropdown,
    }),
});
