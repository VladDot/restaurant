import { useState } from "react";

import { Logo } from "./logo";
import { NavBar } from "./navBar";
import { BurgerMenu } from "./burger";
import { SocialMenu } from "./social-menu";

export const Header = () => {
    const [activeIdxMenu, setActiveIdxMenu] = useState(-1);
    const [isActiveBurger, setActiveBurger] = useState<boolean>(false);

    const handelClick = () => {
        setActiveBurger(false);
    };

    return (
        <header className=" w-full text-white text-center font-serif flex items-center text-sm xl:text-[16px] fixed z-[10000] h-[80px]">
            <div className="  bg-black absolute w-full h-full opacity-80 z-[1]" />

            <div className="container relative z-[3] flex  justify-between items-center h-full">
                {isActiveBurger && (
                    <div
                        onClick={handelClick}
                        className="w-[100vw] h-screen bg-black opacity-40 absolute z-[1] top-0 left-0"
                    />
                )}

                <Logo />

                <NavBar
                    activeIdxMenu={activeIdxMenu}
                    setActiveIdxMenu={setActiveIdxMenu}
                />

                <div className="relative z-10 flex justify-end md:justify-between gap-5 items-center max-w-[200px] w-full mobile:max-w-[300px] xl:justify-end ">
                    <SocialMenu
                        activeIdx={activeIdxMenu}
                        isActiveMenu={isActiveBurger}
                        setActiveIdx={setActiveIdxMenu}
                        setIsActiveMenu={setActiveBurger}
                        className="flex max-w-[150px] w-full md:max-w-[250px] justify-around items-center"
                        classItems="hidden mobile:block w-[40px] hover:scale-110 md:w-[50px] transition-all duration-300 ease-out cursor-pointer"
                    />

                    <BurgerMenu
                        isActiveMenu={isActiveBurger}
                        setIsActiveMenu={setActiveBurger}
                    />
                </div>
            </div>
        </header>
    );
};
