import { Logo } from "./logo";
import { NavBar } from "./navBar";
import { SocialMenu } from "./social-menu";

import { BurgerMenu } from "./burger";
import { Instagram } from "../../assets/svg";

export const Header = () => {
    return (
        <header className=" w-full text-white text-center font-serif  text-sm xl:text-[16px] fixed z-[10000] h-[80px]">
            <div className="  bg-black absolute w-full h-full opacity-80 z-[1]"></div>

            <div className="container relative z-[3] flex  justify-between items-center h-full">
                <Logo />

                <NavBar />

                <SocialMenu className="hidden lg:block" />

                <Instagram className=" w-[40px] hover:text-secondTextHover  xl:w-[50px]" />

                <BurgerMenu />
            </div>
        </header>
    );
};
