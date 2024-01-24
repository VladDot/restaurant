import { Link } from "react-router-dom";
/* import { MainLogo } from "../../../assets/svg"; */

import logoMain from "../../../assets/img/logo-seti-gold.png";

export const Logo = () => {
    return (
        <Link to="/">
            <img
                className="w-full"
                src={logoMain}
                alt="Logo"
            />
        </Link>
    );
};
