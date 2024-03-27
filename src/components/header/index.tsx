import { Logo } from "./logo";
import { NavBar } from "./navBar";
import { SocialMenu } from "./social-menu";

import { BurgerMenu } from "./burger";

export const Header = () => {
    return (
        <header className=" w-full text-white text-center font-serif  text-sm xl:text-[16px] fixed z-[10000] h-[80px]">
            <div className="  bg-black absolute w-full h-full opacity-80 z-[1]"></div>

            <div className="container relative px-1 z-[3] flex  justify-between items-center h-full">
                <Logo />

                <NavBar />
                <div className="flex justify-end md:justify-between gap-5 items-center max-w-[200px] w-full mobile:max-w-[300px] xl:justify-end">
                    <SocialMenu
                        classname="flex max-w-[150px] w-full md:max-w-[250px] justify-around items-center"
                        classItems="hidden mobile:block w-[40px] hover:scale-110 md:w-[50px] transition-all duration-300 ease-out cursor-pointer"
                    />

                    <BurgerMenu />
                </div>
            </div>
        </header>
    );
};
