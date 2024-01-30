import { Link } from "react-router-dom";

import { navBar } from "../../config";

import { getStyles } from "../style";

import { DropDownMenu } from "../../dropDownMenu";
import { SocialMenu } from "../../social-menu";

interface MyComponentProps {
    isActive: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BurgerMenuItems: React.FC<MyComponentProps> = ({
    isActive,
    setActive,
}) => {
    const { burgerMenu, burgerItems } = getStyles(isActive);
    console.log(isActive);

    return (
        <div
            className={`${burgerMenu}  desktop:hidden text-black overflow-y-auto`}
        >
            <div className="flex flex-wrap gap-y-5 mb-10 pt-4">
                {navBar.map((items, idx) => {
                    return (
                        <div
                            id={`main_menu_${idx}`}
                            key={`${items.name}_${idx}`}
                            className={burgerItems}
                        >
                            {!items.categories && (
                                <Link
                                    className="hover:text-secondTextHover w-full text-left"
                                    onClick={() => setActive(!isActive)}
                                    to={items.url}
                                >
                                    {items.title}
                                </Link>
                            )}

                            {items.categories && (
                                <DropDownMenu
                                    idx={idx}
                                    {...items}
                                    isActive={isActive}
                                    setIsActive={setActive}
                                />
                            )}
                        </div>
                    );
                })}
            </div>

            <SocialMenu
                isActive={isActive}
                setIsActive={setActive}
                className="minSm:flex w-fit mx-auto"
            />
        </div>
    );
};
