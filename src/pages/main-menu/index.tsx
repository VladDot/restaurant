import { categoriesMenu } from "../../mock";

import { Banner, MenuCategories } from "../../components";

import ImgBanner from "../../assets/img/house.jpg";

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
