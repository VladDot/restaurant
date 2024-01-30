import { useState } from "react";
import { getStyles } from "../../style";
import { Link } from "react-router-dom";
import { NavBarLink } from "../../config";

interface IMenuProps {
    name: string;
    categories?: NavBarLink[];
    idx: number;
    url: string;
    title: string;
}

export const NavBarDropMenu = ({
    name,
    categories,
    idx,
    url,
    title,
}: IMenuProps) => {
    const [isArrow, setIsArrow] = useState(false);

    const { arrow, drop } = getStyles(isArrow);
    console.log(isArrow);

    return (
        <div className="w-fit text-center h-full">
            {!categories && (
                <Link
                    className="px-1 items-center flex w-fit h-full hover:text-secondTextHover duration-150"
                    to={url}
                >
                    {title}
                </Link>
            )}

            {categories && (
                <div
                    className="w-fit group text-center  hover:text-secondTextHover  duration-150 h-full"
                    onMouseEnter={() => {
                        setIsArrow(!isArrow);
                    }}
                    onMouseLeave={() => setIsArrow(!isArrow)}
                >
                    <div className=" flex  justify-center items-center text-center h-full gap-4  ">
                        <Link
                            className="w-fit gap-2 items-center flex h-full px-1 transition-all duration-300 easy-in-out group-hover:text-secondTextHover"
                            to={url}
                        >
                            <p>{title}</p>
                            <span className={arrow}></span>
                        </Link>
                    </div>
                    {isArrow === true && (
                        <ul className={drop}>
                            {categories?.map(({ name, url }, idx) => (
                                <Link
                                    to={url}
                                    className=" p-2 pr-5 flex flex-col gap-5 text-black hover:text-secondTextHover text-[18px] hover:scale-125 transition-all duration-300 easy-in-out"
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
