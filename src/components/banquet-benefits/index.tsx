import { IsvgBanquet, svgBanquet } from "../../pages/banquet/config";
import { ExpandingElement } from "../expanding-element";

export const BanquetBenefits = () => {
    return (
        <section className="w-full "> <div className="lg:flex lg:flex-wrap w-full lg:[&>div:last-child>div>h2]:max-w-[350px]">
            {svgBanquet.map(({ svg, text }: IsvgBanquet) => (
                <ExpandingElement
                    Svg={svg}
                    text={text}
                    key={`ExpandingElement_${text}_1`}
                />
            ))}
        </div></section>
       
    );
};
