import { useState } from "react";

import "./style.css";

import { BurgerMenuItems } from "./burgerMenu";
import { BurgerIcon } from "./burgerIcon";

export const BurgerMenu = () => {
    const [isActiveBurger, setActiveBurger] = useState<boolean>(false);

    return (
        <>
            <BurgerIcon
                isActive={isActiveBurger}
                setActive={setActiveBurger}
            />
            <BurgerMenuItems
                isActive={isActiveBurger}
                setActive={setActiveBurger}
            />
        </>
    );
};
