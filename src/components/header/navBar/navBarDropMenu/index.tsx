import { useState } from "react";
import { Link } from "react-router-dom";
import { getStyles } from "../../style";
import { NavBarLink } from "../../../../mock";
import { scrollToTop } from "../../../../helpers";
// TODO break reverseAnimate in setTimeout
interface IMenuProps {
    idx: number;
    url: string;
    name: string;
    title: string;
    categories?: NavBarLink[];
}

export const NavBarDropMenu = ({ url, title, categories }: IMenuProps) => {
    const [isActive, setIsActive] = useState(false);
    const [isReverseAnimate, setIsReverseAnimate] = useState(true);

    const isBigMenu = !!categories && categories.length > 4;

    const heightLi = isBigMenu ? 24 : 40;

    const heightUl = isActive
        ? `${categories && categories?.length * heightLi + 40}px`
        : "0";

    const { arrow, drop, subCategoryLink } = getStyles(
        isActive,
        isBigMenu,
        isReverseAnimate
    );
    return (
        <div className="w-fit text-center h-full">
            {!categories && (
                <Link
                    onClick={() => scrollToTop("auto")}
                    className="px-1 items-center flex w-fit h-full hover:text-secondTextHover duration-150"
                    to={url}
                >
                    {title}
                </Link>
            )}

            {categories && (
                <div
                    className="w-fit group text-center hover:text-secondTextHover  duration-150 h-full"
                    onMouseEnter={() => {
                        setIsActive(true);
                        setIsReverseAnimate(false);
                    }}
                    onMouseLeave={() => {
                        setIsReverseAnimate(true);
                        setTimeout(() => {
                            setIsActive(false);
                        }, 300);
                    }}
                >
                    <div className="flex justify-center items-center text-center h-full gap-4  ">
                        <Link
                            onClick={() => scrollToTop("auto")}
                            className="w-fit gap-2 items-center flex h-full px-1 transition-all duration-300 easy-in-out group-hover:text-secondTextHover"
                            to={url}
                        >
                            <p>{title}</p>
                            <span className={arrow}></span>
                        </Link>
                    </div>
                    {isActive && (
                        <ul
                            className={drop}
                            style={{ height: heightUl }}
                        >
                            {categories?.map(({ name, url }, idx) => (
                                <Link
                                    onClick={() => scrollToTop("auto")}
                                    to={url}
                                    className={subCategoryLink}
                                    key={`drop_down_${name}_${idx}`}
                                >
                                    {name}
                                </Link>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
};
