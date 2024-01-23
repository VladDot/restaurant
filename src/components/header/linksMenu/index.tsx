import { Link } from "react-router-dom";
import { NavBarLink } from "../config";

interface ListMenuProps extends NavBarLink {
    idx: number;
}

export const ListMenu: React.FC<ListMenuProps> = ({ name, url, idx }) => {
    return (
        <ul>
            <Link
                key={`${name}_${idx}`}
                to={url}
            >
                {name}
            </Link>
        </ul>
    );
};