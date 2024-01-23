import { Link } from "react-router-dom";
import { navBar } from "../config";
import { ListMenu } from "../linksMenu";

export const NavBar = () => {
    return (
        <div className="flex gap-5">
            {navBar.map((items, idx) => (
                <>
                    <h1>
                        <Link
                            key={`${items.name}_${idx}`}
                            to={items.url}
                        >
                            <h1>{items.name}</h1>
                            <ul>
                                {items.category &&
                                    items.category?.map((item) => (
                                        <ListMenu
                                            {...item}
                                            key={idx}
                                            idx={idx}
                                        />
                                    ))}
                            </ul>
                        </Link>
                    </h1>
                </>
            ))}
        </div>
    );
};

// export interface NavBarLink {
//     name: string;
//     url: string;
//     category?: NavBarLink[];
// }

// interface ListMenuProps extends NavBarLink {
//     idx: number;
// }
