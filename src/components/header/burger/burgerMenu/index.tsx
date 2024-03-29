import { useState } from "react";

import { SocialMenu } from "../../social-menu";
import { DropDownMenu } from "../../dropDownMenu";

import { navBar } from "../../../../mock";

import { getStyles } from "../style";

interface MyComponentProps {
    isActiveMenu: boolean;
    setIsActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BurgerMenuItems: React.FC<MyComponentProps> = ({
    isActiveMenu,
    setIsActiveMenu,
}) => {
    const { burgerMenu } = getStyles(isActiveMenu);

    const [activeIdx, setActiveIdx] = useState(-1);

    return (
        <div
            className={`${burgerMenu}  desktop:hidden text-black overflow-y-auto`}
        >
            <div className="flex flex-wrap gap-y-5 mb-10 pt-4">
                {navBar.map((link, idx) => (
                    <DropDownMenu
                        idx={idx}
                        {...link}
                        activeIdx={activeIdx}
                        setActiveIdx={setActiveIdx}
                        setIsActiveMenu={setIsActiveMenu}
                        key={`menu_burger-mobile-${idx}`}
                    />
                ))}
            </div>

            <SocialMenu
                activeIdx={activeIdx}
                isActiveMenu={isActiveMenu}
                setActiveIdx={setActiveIdx}
                setIsActiveMenu={setIsActiveMenu}
                className="flex w-full max-w-[250px] m-auto justify-around items-center"
                classItems=" w-[40px] hover:scale-110 md:w-[50px] transition-all duration-300 ease-out cursor-pointer"
            />
        </div>
    );
};
