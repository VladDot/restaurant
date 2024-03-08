import clsx from "clsx";

import { FormLogin, FormRegistration } from "../../../components";

interface IContentReversProps {
    isRevers: boolean | null;
}

export const ContentRevers: React.FC<IContentReversProps> = ({ isRevers }) => {
    return (
        <div className=" min-w-[320px] w-full">
            <div
                style={{ transformStyle: "preserve-3d" }}
                className={clsx("relative h-[550px] duration-500 ease-out", {
                    "animate-rotateY ": isRevers === false,
                    "animate-reversRotateY": isRevers === true,
                })}
            >
                <div
                    style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg) ",
                    }}
                    className="absolute w-full h-full  flex items-center justify-center z-10"
                >
                    <FormRegistration />
                </div>
                <div
                    style={{ backfaceVisibility: "hidden" }}
                    className="absolute w-full h-full  flex items-center justify-center z-1"
                >
                    <FormLogin />
                </div>
            </div>
        </div>
    );
};
