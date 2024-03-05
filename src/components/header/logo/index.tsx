import { Link } from "react-router-dom";
/* import { MainLogo } from "../../../assets/svg"; */

import logoMain from "../../../assets/img/logo-seti-gold.png";

export const Logo = () => {
    return (
        <Link
            to="/"
            className="max-w-[140px] md:max-w-[210px] lg:max-w-[210px] xl:max-w-[300px]"
        >
            <img
                className="w-full"
                src={logoMain}
                alt="Logo"
            />
        </Link>
    );
};