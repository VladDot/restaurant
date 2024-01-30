import { Link } from "react-router-dom";

import { routes } from "../../../constants/routes";

interface MyComponentProps {
    isActive?: boolean;
    setIsActive?: React.Dispatch<React.SetStateAction<boolean>>;
    className?: string;
}

export const SocialMenu = ({
    className,
    isActive,
    setIsActive,
}: MyComponentProps) => {
    return (
        <div className={`gap-5 items-center ${className ? className : ""}`}>
            <div className=" flex  border-2 rounded-full ">
                <div className=" text-base p-2 hover:bg-secondText rounded-l-full lg:p-2 lg:text-[14px] border-r-2 w-[100px] sm:w-[100px]  md:w-[120px] lg:w-[120px] xl:w-[120px] xl:p-2 xl:text-[14px] transition-all duration-300 easy-in-out">
                    <span className=" w-full  ">
                        <Link
                            onClick={() => {
                                setIsActive && setIsActive(!isActive);
                            }}
                            to={routes.registration}
                        >
                            SIGN IN
                        </Link>
                    </span>
                </div>
                <div className=" text-base p-2 hover:bg-secondText rounded-r-full lg:p-2  lg:text-[14px] w-[100px] sm:w-[100px] md:w-[120px] lg:w-[120px] xl:w-[120px] xl:p-2 xl:text-[14px] transition-all duration-300 easy-in-out">
                    <span className="w-full ">
                        <Link
                            onClick={() => {
                                setIsActive && setIsActive(!isActive);
                            }}
                            to={routes.login}
                        >
                            SIGN UP
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    );
};
