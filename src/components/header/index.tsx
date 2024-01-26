import { Logo } from "./logo";
import { NavBar } from "./navBar";
import { SocialMenu } from "./social-menu";

import { BurgerMenu } from "./burger";

export const Header = () => {
    /*     console.log(isActiveBurger);

    const { burger } = getStyles(isActiveBurger); */
    return (
        <header className="w-full text-white text-center font-serif font-bold text-sm xl:text-[14px] fixed z-[999]">
            <div className=" bg-black absolute w-full h-full opacity-80 z-[1]"></div>
            <div className="relative px-5 py-4 z-[3] flex sm:px-5 lg:px-2 minSm:w-full lg:w-full justify-between lg:justify-around lg:max-w-full m-auto items-center ">
                <div className="max-w-[140px] md:max-w-[210px] lg:max-w-[150px] xl:max-w-[300px]">
                    <Logo />
                </div>

                <div className=" md:flex items-center ">
                    <NavBar />
                </div>
                <div>
                    <SocialMenu />
                </div>
                <div className="lg:hidden">
                    <BurgerMenu />
                </div>

                {/* <button
                    className="border-2 h-8 w-9 rounded-lg border-white lg:hidden"
                    onClick={() => {
                        setActiveBurger(!isActiveBurger);
                    }}
                >
                    <span className={burger}></span>
                </button> */}
            </div>
        </header>
    );
};
