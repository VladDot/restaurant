import { Logo } from "./logo";
import { NavBar } from "./navBar";
import { SocialMenu } from "./social-menu";

import { BurgerMenu } from "./burger";
import { Instagram } from "../../assets/svg";
import { Link } from "react-router-dom";
import { LanguageSelector } from "../language-selector";

export const Header = () => {
    return (
        <header className=" w-full text-white text-center font-serif  text-sm xl:text-[16px] fixed z-[10000] h-[80px]">
            <div className="  bg-black absolute w-full h-full opacity-80 z-[1]"></div>

            <div className="container relative z-[3] flex  justify-between items-center h-full">
                <Logo />

                <NavBar />

                <SocialMenu className="hidden lg:block" />
                <Link to={"/"}>
                    <Instagram className=" w-[40px] fill-white hover:fill-secondTextHover hover:scale-110 xl:w-[50px] transition-all duration-300 ease-out cursor-pointer" />
                </Link>

                <BurgerMenu />
            </div>
        </header>
    );
};
