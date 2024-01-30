import { navBar } from "../config";

import { NavBarDropMenu } from "./navBarDropMenu";

export const NavBar = () => {
    return (
        <div className=" hidden items-center  h-full desktop:flex   justify-center xl:gap-5">
            {navBar.map((items, idx) => {
                return (
                    <NavBarDropMenu
                        key={`${items.name}_${idx}`}
                        {...items}
                        idx={idx}
                    />
                );
            })}
        </div>
    );
};
