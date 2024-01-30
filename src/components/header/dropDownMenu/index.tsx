import { Link } from "react-router-dom";

import { NavBarLink } from "../config";
import { useState } from "react";
import { getMenuStyles } from "../burger/style";

interface ListMenuProps {
    idx: number;
    name: string;
    url: string;
    title: string;
    height?: string;
    categories?: NavBarLink[];
    isActive: boolean;
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DropDownMenu = ({
    url,
    title,
    categories,
    isActive,
    setIsActive,
}: ListMenuProps) => {
    const [isActiveDropdown, setIsActiveDropdown] = useState(false);
    const { dropdown, btn, link } = getMenuStyles(isActiveDropdown);

    const [active, setActive] = useState("");

    const handlerClick = () => {
        setIsActiveDropdown(!isActiveDropdown);

        setActive(active === title ? "" : title);
    };

    return (
        <div className="w-[90%]">
            <div className="flex justify-between">
                <Link
                    onClick={() => setIsActive(!isActive)}
                    to={url}
                    className={link}
                >
                    {title}
                </Link>

                <span
                    onClick={() => handlerClick()}
                    className={btn}
                >
                    {isActiveDropdown ? "-" : "+"}
                </span>
            </div>

            <ul
                className={dropdown}
                style={{
                    height: isActiveDropdown
                        ? `${categories && categories?.length * 28}px`
                        : "0",
                }}
            >
                {categories?.map((category, idx) => (
                    <li
                        className="w-full"
                        key={`drop_down_${category.name}_${idx}`}
                    >
                        <Link
                            onClick={() => setIsActive(!isActive)}
                            className="w-full block hover:text-secondTextHover  duration-150"
                            to={category.url}
                        >
                            {category.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
