import { useState } from "react";
import { Logo } from "./logo";
import { NavBar } from "./navBar";
import { SocialMenu } from "./social-menu";

import { getStyles } from "./style";

export const Header = () => {
    const [isActiveBurger, setActiveBurger] = useState<boolean>(false);

    console.log(isActiveBurger);

    const { burger } = getStyles(isActiveBurger);
    return (
        <header className="w-full p-1  bg-blue-600 border-2 border-blue-700 text-center font-serif font-bold text-sm xl:text-[16px]">
            <div className="flex px-1 sm:px-5 lg:px-2 minSm:w-full py-2 lg:w-full justify-between lg:justify-around lg:max-w-full m-auto items-center ">
                <div className="max-w-[140px] md:max-w-[210px] lg:max-w-[150px] xl:max-w-[300px]">
                    <Logo />
                </div>

                <div className=" md:flex items-center ">
                    <NavBar />
                </div>
                <div>
                    <SocialMenu />
                </div>

                <button
                    className="border-2 h-8 w-9 rounded-lg border-black lg:hidden"
                    onClick={() => {
                        setActiveBurger(!isActiveBurger);
                    }}
                >
                    <span className={burger}></span>
                </button>
            </div>
        </header>
    );
};
