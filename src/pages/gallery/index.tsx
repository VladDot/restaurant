import { mokMainGallery } from "../../mock/mokGallery";
import { MainBanner, MenuCategories } from "../../components";

export const Gallery = () => {
    return (
        <>
            <MainBanner />

            <MenuCategories data={mokMainGallery} />
        </>
    );
};
