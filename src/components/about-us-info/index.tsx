import { useState } from "react";

import { useWindowWidth } from "../../hook";

import { CollapsibleWindow } from "../collapsible-window";

import { getStyles } from "./style";
import { interiorGallery } from "../../mock";
import { textInfo } from "../../mock/textMock";
import { AboutUsGallery } from "./about-us-gallery";

export const AboutUsInfo = () => {
    const { width } = useWindowWidth();
    const [isActive, setIsActive] = useState(false);

    const { continueText } = getStyles(isActive);

    return (
        <section className="container  py-8 md:flex gap-5">
            <div className="relative pb-3">
                <h2 className="mb-3  text-secondText text-[18px]">
                    ЗАТИШНИЙ СІМЕЙНИЙ ЗАКЛАД
                </h2>

                <h1 className="mb-5 text-[26px]">Ресторан "СЕТИ"</h1>
                <CollapsibleWindow
                    closingHeight={0.5}
                    isActive={isActive}
                    className="relative"
                    disabled={width > 767}
                    onClick={() => setIsActive(!isActive)}
                >
                    {textInfo.map(({ text }, idx) => (
                        <p
                            key={`info_about_${idx}`}
                            className="text-[13px] md:text-[16px] lg:text-[20px] xl:text-[24px] text-fourth py-1 "
                        >
                            {text}
                        </p>
                    ))}
                </CollapsibleWindow>
                {!isActive && (
                    <>
                        <span className={continueText}></span>

                        <span
                            onClick={() => setIsActive(true)}
                            className={`absolute top-[90%] right-0 text-[13px] w-fit transition-all duration-300 easy-in-out text-secondText  md:hidden cursor-pointer `}
                        >
                            Read more...
                        </span>
                    </>
                )}
            </div>
            <AboutUsGallery data={interiorGallery} />
        </section>
    );
};
