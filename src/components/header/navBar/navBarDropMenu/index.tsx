import { useState } from "react";
import { Link } from "react-router-dom";

import { NavBarLink } from "../../../../mock";
import { scrollToTop } from "../../../../helpers";

import { getStyles } from "../../style";

interface IMenuProps {
    idx: number;
    url: string;
    name: string;
    title: string;
    activeIdxMenu: number;
    categories?: NavBarLink[];
    setActiveIdxMenu: React.Dispatch<React.SetStateAction<number>>;
}

export const NavBarDropMenu = ({
    idx,
    url,
    title,
    categories,
    activeIdxMenu,
    setActiveIdxMenu,
}: IMenuProps) => {
    const [isActive, setIsActive] = useState(false);
    const [isReverseAnimate, setIsReverseAnimate] = useState(true);

    const activeMenu = idx === activeIdxMenu;

    const isBigMenu = !!categories && categories.length > 4;

    const heightLi = isBigMenu ? 24 : 40;

    const heightUl = isActive
        ? `${categories && categories?.length * heightLi + 40}px`
        : "0";

    const handlerClick = () => {
        scrollToTop("auto");
        if (activeMenu) {
            setActiveIdxMenu(-1);
            return;
        }
        setActiveIdxMenu(idx);
    };

    const {
        drop,
        arrow,
        styleCategory,
        activeCategory,
        subCategoryLink,
        styleUnCategorized,
    } = getStyles(isBigMenu, activeMenu, isReverseAnimate);

    return (
        <div className="w-fit text-center h-full">
            {!categories && (
                <Link
                    onClick={() => handlerClick()}
                    className={styleUnCategorized}
                    to={url}
                >
                    {title}
                </Link>
            )}

            {categories && (
                <div
                    className="w-fit text-center h-full"
                    onMouseEnter={() => {
                        setTimeout(() => {
                            setIsActive(true);
                        }, 200);

                        setIsReverseAnimate(false);
                    }}
                    onMouseLeave={() => {
                        setIsReverseAnimate(true);
                        setIsActive(true);
                        setTimeout(() => {
                            setIsActive(false);
                        }, 200);
                    }}
                >
                    <div className={activeCategory}>
                        <Link
                            onClick={() => handlerClick()}
                            className={styleCategory}
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
                                    onClick={() => handlerClick()}
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
