import { Link } from "react-router-dom";

import { NavBarLink } from "../config";
import { useState } from "react";
import { getMenuStyles } from "../burger/style";

interface ListMenuProps {
    idx: number;
    name: string;
    url: string;
    title: string;
    categories?: NavBarLink[];
}

export const DropDownMenu = ({
    name,
    url,
    title,
    idx,
    categories,
}: ListMenuProps) => {
    const [isActiveDropdown, setIsActiveDropdown] = useState(false);
    const { dropdown } = getMenuStyles(isActiveDropdown);

    const handlerClick = () => {
        setIsActiveDropdown(!isActiveDropdown);
    };

    return (
        <div className=" w-full">
            <div className="flex justify-between w-[95%]">
                <Link
                    to={url}
                    className="text-yellow-500 "
                >
                    {title}
                </Link>
                <span
                    id={`main_menu_${idx}`}
                    onClick={() => handlerClick()}
                    className=" cursor-pointer text-white text-[18px] font-bold items-center  flex justify-center w-5 h-5 rounded-full bg-black"
                >
                    +
                </span>
            </div>

            <ul className={dropdown}>
                {categories?.map((category, idx) => (
                    <li
                        className="p-1"
                        key={`drop_down_${category.name}_${idx}`}
                    >
                        <Link to={category.url}>{category.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
