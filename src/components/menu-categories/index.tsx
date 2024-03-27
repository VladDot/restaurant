import { MenuCategory } from "./menuCategory";

interface IMenuItem {
    id: string;
    url: string;
    img: string;
    title: string;
}

interface IMenuCategoriesProps {
    data: IMenuItem[];
}

export const MenuCategories: React.FC<IMenuCategoriesProps> = ({ data }) => {
    return (
        <section >
            <ul className="flex flex-wrap w-full md:[&>li:nth-child(odd)>span]:-translate-x-[60px] md:[&>li:nth-child(even)>span]:translate-x-[60px]">
                {data.map((item, idx) => (
                    <MenuCategory
                        {...item}
                        key={`categoriesMenu_${idx}`}
                    />
                ))}
            </ul>
        </section>
    );
};
