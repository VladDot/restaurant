import { Link } from "react-router-dom";

import { scrollToTop } from "../../../helpers";

import { UserIcon } from "../../userIcon";
import { Instagram } from "../../../assets/svg";

interface ISocialMenuProps {
    className: string;
    activeIdx: number;
    classItems: string;
    isActiveMenu: boolean;
    setActiveIdx: React.Dispatch<React.SetStateAction<number>>;
    setIsActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SocialMenu: React.FC<ISocialMenuProps> = ({
    className,
    classItems,
    setActiveIdx,
    setIsActiveMenu,
}) => {
    const handleClick = () => {
        setActiveIdx(-1);
        scrollToTop("auto");
        setIsActiveMenu(false);
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
