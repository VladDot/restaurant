import { filteredCategoriesMenu } from "../../mock";
import { MenuCategory } from "./menuCategory";

export const MenuCategories = () => {
    return (
        <section>
            <ul className="flex flex-wrap w-full">
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
