import { useState } from "react";

import { BtnGroup } from "./btnGroup";
import { ContentRevers } from "./contentRevers";

import Img8 from "../../assets/img/mainList/restaurant-seti-17.jpg";

export const Login = () => {
    const [activeId, setActiveId] = useState<number>(0);

    const [isRevers, setIsRevers] = useState<boolean | undefined>(undefined);

    //TODO you need to edit the code  в style.ts не приходит bollean
    return (
        <>
            <section
                className=" h-screen bg-cover bg-no-repeat bg-fixed pt-20"
                style={{ backgroundImage: `url(${Img8})` }}
            >
                <div className="absolute top-0 w-full h-full bg-black opacity-60 "></div>

                <div className=" container flex flex-col items-center py-10 ">
                    <div className=" flex justify-center w-fit rounded-3xl [&>div:first-child>button]:rounded-l-3xl [&>div:last-child>button]:rounded-r-3xl ">
                        <BtnGroup
                            id={0}
                            text="SING-IN"
                            isActive={activeId === 0}
                            setIsActive={() => setActiveId(0)}
                            setIsRevers={() => setIsRevers(true)}
                        />

                        <BtnGroup
                            id={1}
                            text="SING-UP"
                            isRevers={isRevers}
                            isActive={activeId === 1}
                            setIsActive={() => setActiveId(1)}
                            setIsRevers={() => setIsRevers(false)}
                        />
                    </div>

                    <ContentRevers isRevers={isRevers} />
                </div>
            </section>
        </>
    );
};
