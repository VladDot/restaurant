import clsx from "clsx";

import { FormLogin, FormRegistration, Title } from "../../../components";

interface IContentReversProps {
    isRevers: boolean | undefined;
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
                    className="absolute w-full h-full flex flex-col items-center z-10"
                >
                    <Title text="Registration" />

                    <FormRegistration />
                </div>

                <div
                    style={{ backfaceVisibility: "hidden" }}
                    className="absolute w-full h-full flex flex-col items-center z-1 "
                >
                    <Title text="login" />

                    <FormLogin />
                </div>
            </div>
        </div>
    );
};
