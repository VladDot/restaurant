import { useState } from "react";

import { navBar } from "../../../mock";

import { NavBarDropMenu } from "./navBarDropMenu";

interface INavBarProps {
    activeIdxMenu: number;
    setActiveIdxMenu: React.Dispatch<React.SetStateAction<number>>;
}

export const NavBar: React.FC<INavBarProps> = ({
    activeIdxMenu,
    setActiveIdxMenu,
}) => {
    return (
        <div className=" hidden items-center  h-full desktop:flex justify-center xl:gap-5">
            {navBar.map((items, idx) => {
                return (
                    <NavBarDropMenu
                        idx={idx}
                        {...items}
                        key={`${items.name}_${idx}`}
                        activeIdxMenu={activeIdxMenu}
                        setActiveIdxMenu={setActiveIdxMenu}
                    />
                );
            })}
        </div>
    );
};
