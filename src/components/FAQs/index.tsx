import { useRef } from "react";

import clsx from "clsx";

import { questions } from "./config";

import { useVisibleElement } from "../../hook";

import { SubTitle } from "../subtitle";

export const FAQs = () => {
    const elementRef = useRef<HTMLDivElement>(null);

    const { isVisible } = useVisibleElement({ elementRef });

    return (
        <section className="container py-10 flex flex-col justify-center items-center">
            <SubTitle
                text="Найчастіші питання"
                className=" mb-5 sectionSubTitle"
            />

            <ul className="lg:px-10 w-full px-4 sm:w-[80%] list-disc mb-3 leading-6 text-[13px] lg:text-[16px] text-fourth">
                {questions.map(({ text }, idx) => (
                    <li key={`questions_${idx}`}>{text}</li>
                ))}
            </ul>

            <div
                ref={elementRef}
                className={clsx(
                    `cursor-default w-full  sm:w-[80%]  odd:bg-bgA78963  bg-thirdBg  py-[20px] group hover:!bg-black  transition-all duration-500 easy-in-out `,
                    {
                        "scale-100 animate-fadeIn duration-700": isVisible,
                        "scale-0 ": !isVisible,
                    }
                )}
            >
                <div className="flex flex-col justify-center items-center  ">
                    <p className="text-white text-[35px] md:text-[42px] mb-2 fill-white group-hover:fill-secondTextHover duration-300 group-hover:text-secondTextHover">
                        Відповідь: "ТАК"
                    </p>

                    <h2
                        className={`text-[13px] md:text-[24px] text-center whitespace-pre-line leading-7     group-hover:text-secondTextHover duration-300 easy-in-out text-white `}
                    >
                        До кожного клієнта у нас індивідуальний підхід :)
                    </h2>
                </div>
            </div>
        </section>
    );
};
