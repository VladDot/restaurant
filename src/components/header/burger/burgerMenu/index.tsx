import { Link } from "react-router-dom";

import { navBar } from "../../config";

import { getStyles } from "../style";

import { DropDownMenu } from "../../dropDownMenu";

interface MyComponentProps {
    isActive: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
}
/* interface IDropdownMenu {

} */
export const BurgerMenuItems: React.FC<MyComponentProps> = ({ isActive }) => {
    const { burgerMenu, burgerItems } = getStyles(isActive);

    return (
        <div className={`${burgerMenu} `}>
            {navBar.map((items, idx) => {
                return (
                    <div
                        id={`main_menu_${idx}`}
                        key={`${items.name}_${idx}`}
                        className={burgerItems}
                    >
                        {!items.categories && (
                            <Link to={items.url}>{items.title}</Link>
                        )}

                        {items.categories && (
                            <DropDownMenu
                                idx={idx}
                                {...items}
                            />
                        )}
                    </div>
                );
            })}
        </div>
    );
};
