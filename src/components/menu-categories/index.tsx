import { filteredCategoriesMenu } from "../../mock";

import { MenuCategory } from "./menuCategory";

export const MenuCategories = () => {
    return (
        <section className="pb-10">
            <ul className="flex flex-wrap w-full md:[&>li:nth-child(odd)>span]:-translate-x-[60px] md:[&>li:nth-child(even)>span]:translate-x-[60px] ">
                {filteredCategoriesMenu.map((items, idx) => (
                    <MenuCategory
                        {...items}
                        key={`categoriesMenu_${idx}`}
                    />
                ))}
            </ul>
        </section>
    );
};
