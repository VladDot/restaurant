import { categoriesMenu } from "../../mock";
import { Banner, MenuCategories } from "../../components";

export const BanquetMenu = () => {
    return (
        <>
            <Banner
                title="BanquetMenu"
                content="BanquetMenu BanquetMenu BanquetMenu"
            />

            <MenuCategories data={categoriesMenu} />
        </>
    );
};
