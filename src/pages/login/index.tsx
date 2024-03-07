import { useState } from "react";
import { Banner, FormLogin, FormRegistration } from "../../components";
import clsx from "clsx";
import { BtnGroup } from "./btnGroup";

export const Login = () => {
    const [isActive, setIsActive] = useState<boolean | null>(null);

    return (
        <>
            <Banner
                title="LOGIN"
                content="LOGIN LOGIN LOGIN"
            />
            <section>
                <div className=" container flex flex-col items-center">
                    <div className="flex justify-center w-full">
                        <BtnGroup
                            text="Login"
                            setIsActive={() => setIsActive(true)}
                        />
                        <BtnGroup
                            text="Registration"
                            isActive={false}
                            setIsActive={() => setIsActive(false)}
                        />
                    </div>

                    {/* <div className="relative w-[50%] flex justify-center ">
                        {isActive ? <FormLogin /> : <FormRegistration />}
                    </div> */}
                    <div className=" w-[1000px] h-[1000px]">
                        <div
                            style={{ transformStyle: "preserve-3d" }}
                            className={clsx(
                                "relative h-[550px] duration-500 ease-out",
                                {
                                    "animate-rotateY ": isActive === false,
                                    "animate-reversRotateY": isActive === true,
                                }
                            )}
                        >
                            <div
                                style={{
                                    backfaceVisibility: "hidden",
                                    transform: "rotateY(180deg) ",
                                }}
                                className="absolute w-full h-full  flex items-center justify-center"
                            >
                                <FormRegistration />
                            </div>
                            <div
                                style={{ backfaceVisibility: "hidden" }}
                                className="absolute w-full h-full  flex items-center justify-center bg-black"
                            >
                                <FormLogin />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
