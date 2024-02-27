import { AreasCard } from "./areas-card";
import { banquetBenefitsMock } from "../../mock";

export const RestaurantAreas = () => {
    return (
        <section>
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
