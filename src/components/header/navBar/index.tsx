import { Link } from "react-router-dom";
import { navBar } from "../config";
import { DropDownMenu } from "../linksMenu";

export const NavBar = () => {
    return (
        <div className=" hidden  lg:flex gap-1 px-3 py-2 justify-center items-center xl:gap-3">
            {navBar.map((items, idx) => {
                return (
                    <div
                        key={`${items.name}_${idx}`}
                        className="w-fit text-center "
                    >
                        {!items.category && (
                            <Link
                                className="  w-fit p-1 px-2"
                                to={items.url}
                            >
                                {items.title}
                            </Link>
                        )}

                        {items.category && (
                            <div className="w-fit text-center  hover:text-red">
                                <Link
                                    className="w-fit p-1 px-2"
                                    to={items.url}
                                >
                                    {items.title}
                                </Link>
                                <ul className="absolute flex flex-wrap flex-col w-fit max-h-[280px] whitespace-nowrap text-start   bg-blue-400 overflow-hidden h-0 ">
                                    {items.category?.map((item, idx) => (
                                        <li
                                            className="p-1"
                                            key={`drop_down_${item.name}_${idx}`}
                                        >
                                            <DropDownMenu
                                                {...item}
                                                key={idx}
                                                idx={idx}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};
