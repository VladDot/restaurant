import { Link } from "react-router-dom";
import { Instagram } from "../../../assets/svg";
import { routes } from "../../../constants/routes";

export const SocialMenu = () => {
    return (
        <div className=" minSm:flex gap-5 sm:gap-8 md:gap-[100px] lg:gap-3 w-fit items-center ">
            <div className="hidden minSm:flex   border-2 rounded-full">
                <div className="  p-2 border-r-2 w-[100px] sm:w-[100px]  md:w-[120px] lg:w-[80px] xl:w-[120px]">
                    <span className=" w-full  ">
                        <Link to={routes.registration}>SIGN IN</Link>
                    </span>
                </div>
                <div className="  p-2 w-[100px] sm:w-[100px] md:w-[120px] lg:w-[80px] xl:w-[120px]">
                    <span className="w-full ">
                        <Link to={routes.login}>SIGN UP</Link>
                    </span>
                </div>
            </div>

            <div className=" w-[40px] hover:text-red-500  xl:w-[50px]">
                <Instagram />
            </div>
        </div>
    );
};
