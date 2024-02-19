import { useState } from "react";

import { useWindowWidth } from "../../hook";

import { CollapsibleWindow } from "../collapsible-window";

import { getStyles } from "./style";
import { Up } from "../../assets/svg";
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
                <h2 className="mb-3 text-secondText text-[18px]">
                    ЗАТИШНИЙ СІМЕЙНИЙ ЗАКЛАД
                </h2>
                <h1 className="mb-5 text-[26px]">Ресторан "СЕТИ"</h1>
                <CollapsibleWindow
                    closingHeight={0.4}
                    isActive={isActive}
                    disabled={width > 767}
                    className="relative"
                    onClick={() => setIsActive(!isActive)}
                >
                    {textInfo.map(({ text }, idx) => (
                        <p
                            key={`info_about_${idx}`}
                            className={continueText}
                        >
                            {text}
                        </p>
                    ))}
                </CollapsibleWindow>
                {!isActive && (
                    <Up
                        onClick={() => setIsActive(true)}
                        className="absolute rotate-180 flex justify-center items-center top-[90%] left-1/2 -translate-x-1/2 w-8 h-8 border-2 border-black rounded-full md:hidden"
                    />
                )}
            </div>
            <AboutUsGallery data={interiorGallery} />
        </section>
    );
};
