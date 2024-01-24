import { Link } from "react-router-dom";
import { NavBarLink } from "../config";

interface ListMenuProps extends NavBarLink {
    idx: number;
}

export const DropDownMenu: React.FC<ListMenuProps> = ({ name, url,title }) => {
    return <Link to={url}>{title}</Link>;
};
