import { useState } from "react";

import { Banner } from "../../components";
import { BtnGroup } from "./btnGroup";
import { ContentRevers } from "./contentRevers";

export const Login = () => {
    const [isActive, setIsActive] = useState<boolean>(true);

    const [isRevers, setIsRevers] = useState<boolean | null>(null);

    //TODO you need to edit the code

    return (
        <>
            <Banner
                title="LOGIN"
                content="LOGIN LOGIN LOGIN"
            />
            <section className=" bg-aqua">
                <div className=" container flex flex-col items-center py-10 ">
                    <div className="flex justify-center w-fit border-2  rounded-3xl [&>div:first-child>button]:rounded-l-3xl [&>div:last-child>button]:rounded-r-3xl ">
                        <BtnGroup
                            text="Login"
                            isActive={isActive}
                            setIsActive={() => setIsActive(true)}
                            setIsRevers={() => setIsRevers(true)}
                        />

                        <BtnGroup
                            text="Registration"
                            isActive={!isActive}
                            isRevers={!isRevers}
                            setIsActive={() => setIsActive(false)}
                            setIsRevers={() => setIsRevers(false)}
                        />
                    </div>
                    <ContentRevers isRevers={isRevers} />
                </div>
            </section>
        </>
    );
};
