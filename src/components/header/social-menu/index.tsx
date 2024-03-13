import { Link } from "react-router-dom";
import { Instagram } from "../../../assets/svg";
import { UserIcon } from "../../userIcon";

interface ISocialMenuProps {
    classname: string;
    classItems: string;
}

export const SocialMenu: React.FC<ISocialMenuProps> = ({
    classname,
    classItems,
}) => {
    return (
        <div className={classname}>
            <Link to={"/"}>
                <Instagram className={`${classItems}  fill-fourthBg`} />
            </Link>
            <Link to={"/login"}>
                <UserIcon custom={`${classItems} text-fourthBg`} />
            </Link>
            <Link to={"/"}>
                <h1 className={`${classItems} text-fourthBg font-bold text-2xl`}>UA</h1>
            </Link>
        </div>
    );
};
