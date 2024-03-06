import { categoriesMenu } from "../../mock";
import ImgBanner from "../../assets/img/house.jpg";
import { Banner, MenuCategories } from "../../components";

export const Menu = () => {
    return (
        <>
            <Banner
                title="title"
                src={ImgBanner}
                content="content"
            />

            <MenuCategories data={categoriesMenu} />
        </>
    );
};
