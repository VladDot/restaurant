import { Link } from "react-router-dom";
import { Instagram } from "../../../assets/svg";
import { UserIcon } from "../../userIcon";
import { scrollToTop } from "../../../helpers";

interface ISocialMenuProps {
    className: string;
    classItems: string;
    isActiveMenu: boolean;
    setIsActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
    activeIdx: number;
    setActiveIdx: React.Dispatch<React.SetStateAction<number>>;
}

export const SocialMenu: React.FC<ISocialMenuProps> = ({
    className,
    classItems,
    isActiveMenu,
    setIsActiveMenu,
    setActiveIdx,
}) => {
    const handleClick = () => {
        setIsActiveMenu(false);
        setActiveIdx(-1);
        scrollToTop("auto");
    };
    return (
        <div className={className}>
            <Link
                to={"/"}
                onClick={handleClick}
            >
                <Instagram className={`${classItems}  fill-fourthBg`} />
            </Link>
            <Link
                to={"/login"}
                onClick={handleClick}
            >
                <UserIcon custom={`${classItems} text-fourthBg`} />
            </Link>
            <Link
                to={"/"}
                onClick={handleClick}
            >
                <h1
                    className={`${classItems} text-fourthBg font-bold text-2xl`}
                >
                    UA
                </h1>
            </Link>
        </div>
    );
};
