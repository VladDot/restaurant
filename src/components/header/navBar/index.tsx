import { useState } from "react";

import { navBar } from "../../../mock";

import { NavBarDropMenu } from "./navBarDropMenu";

export const NavBar = () => {
    const [activeIdxMenu, setActiveIdxMenu] = useState(-1);

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
