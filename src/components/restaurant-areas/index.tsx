import { AreasCard } from "./areas-card";
import { banquetBenefitsMock } from "../../mock";
import { Title } from "../title";
import { SubTitle } from "../subtitle";

export const RestaurantAreas = () => {
    return (
        <section className="py-5 ">
            <Title
                text=" МІСЦЯ ДЛЯ ПРОВЕДЕННЯ БАНКЕТІВ У РЕСТОРАНІ"
                className="text-secondText md:text-lg mb-2.5 md:mb-5 text-[18px] px-1"
            />

            <SubTitle
                text="Чотири роздільні зони під банкети"
                className=" mb-5 md:mb-8 text-black px-1"
            />

            <div className="flex flex-col lg:flex-row w-full flex-wrap">
                {banquetBenefitsMock.map((items, idx) => (
                    <AreasCard
                        {...items}
                        key={`banquet_benefits_${idx}`}
                    />
                ))}
            </div>
        </section>
    );
};
