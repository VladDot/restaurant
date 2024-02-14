import { FC } from "react";
import { Instagram } from "../../assets/svg";
import { ExpandingElement } from "../../components";
import { IsvgBanquet, svgBanquet } from "./config";
import { IExpandingElement } from "../../components/expanding-element";

export const Banquet = () => {
    return (
        <div className="w-full ">
            <div className="flex flex-wrap w-full">
                {svgBanquet.map(({ svg, text }: IsvgBanquet) => (
                    <ExpandingElement
                        className=""
                        text={text}
                        Svg={svg}
                        key={`ExpandingElement_${text}_1`}
                    />
                ))}
            </div>
        </div>
    );
};
