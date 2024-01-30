import { useState } from "react";

import { navBar } from "../../config";
import { SocialMenu } from "../../social-menu";
import { DropDownMenu } from "../../dropDownMenu";

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
                isActive={isActiveMenu}
                setIsActive={setIsActiveMenu}
                className="minSm:flex w-fit mx-auto"
            />
        </div>
    );
};
