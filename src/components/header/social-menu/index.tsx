import { Link } from "react-router-dom";

import { routes } from "../../../constants/routes";

interface MyComponentProps {
    isActive?: boolean;
    className?: string;
    setIsActive?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SocialMenu = ({
    isActive,
    className,
    setIsActive,
}: MyComponentProps) => {
    return (
        <div
            className={`gap-5 items-center cursor-pointer ${
                className ? className : ""
            }`}
        >
            <div className=" flex  border-2 rounded-full ">
                <div className=" text-base p-2 group/socialIn hover:bg-secondText rounded-l-full lg:p-2 g:text-[14px] border-r-2 w-[100px] sm:w-[100px]  md:w-[120px] lg:w-[120px] xl:w-[120px] xl:p-2 xl:text-[14px] transition-all duration-300 easy-in-out">
                    <Link
                        to={routes.login}
                        onClick={() => {
                            setIsActive && setIsActive(!isActive);
                        }}
                        className="block w-full uppercase group-hover/socialIn:text-white duration-300 transition-all"
                    >
                        sign in
                    </Link>
                </div>
                <div className="group/socialUp text-base  p-2 hover:bg-secondText rounded-r-full lg:p-2  lg:text-[14px] w-[100px] sm:w-[100px] md:w-[120px] lg:w-[120px] xl:w-[120px] xl:p-2 xl:text-[14px] transition-all duration-300 easy-in-out">
                    <Link
                        to={routes.login}
                        onClick={() => {
                            setIsActive && setIsActive(!isActive);
                        }}
                        className="block w-full uppercase group-hover/socialUp:text-white duration-300 transition-all"
                    >
                        sign up
                    </Link>
                </div>
            </div>
        </div>
    );
};
