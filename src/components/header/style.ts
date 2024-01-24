import clsx from "clsx";

export const getStyles = (isActiveBurger: boolean) => ({
    burger: clsx(
        " relative  w-[25px] left-[3.5px] bg-black  h-[3px] block after:origin-top-left before:origin-bottom-left transition-transform duration-300 transition-opacity after:bg-black after:ease-in-out after:absolute after:block after:w-full after:h-full  after:content-content-[''] after:-top-[7px] before:ease-in-out before:absolute before:block before:bg-black before:w-full before:h-full  before:content-[''] before:top-[7px] ",
        {
            "w-0 left-[9px] after:w-[22px] before:w-[22px] top-1/5 after:rotate-45 before:-rotate-45":
                isActiveBurger,
        },
        { "": !isActiveBurger }
    ),
});
