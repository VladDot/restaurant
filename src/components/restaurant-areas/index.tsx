import { banquetBenefitsMock } from "../../mock";

import { Title } from "../title";
import { SubTitle } from "../subtitle";
import { AreasCard } from "./areas-card";

export const RestaurantAreas = () => {
    return (
        <section className="py-5 ">
            <Title
                text=" МІСЦЯ ДЛЯ ПРОВЕДЕННЯ БАНКЕТІВ У РЕСТОРАНІ"
                className="sectionTitle mb-2.5 md:text-lg md:mb-5"
            />

            <SubTitle
                text="Чотири роздільні зони під банкети"
                className="sectionSubTitle mb-5 md:mb-8"
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
