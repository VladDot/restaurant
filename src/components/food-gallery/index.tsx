import { routes } from "../../constants/routes";

import { tmpSrcFood } from "../../mock";

import { scrollToTop } from "../../helpers";

import { Button, ImgInterior, SubTitle, Title } from "../../components";

import "./style.css";
interface IFoodGalleryProps {
    className?: string;
}

export const FoodGallery: React.FC<IFoodGalleryProps> = ({ className }) => {
    return (
        <section>
            <div className={`py-10 container ${className}`}>
                <Title
                    text="галерея страв"
                    uppercase
                    className="mb-3 sectionTitle"
                />

                <SubTitle
                    text="Вишуканість та натуральність"
                    className="mb-8 sectionSubTitle"
                />

                <ul className="flex gallery-dishes justify-between flex-wrap w-full gap-1 lg:gap-y-3 mb-4 lg:mb-4">
                    {tmpSrcFood.map(({ imgUrl, aspectMenu }, idx) => (
                        <ImgInterior
                            url={imgUrl}
                            aspect={aspectMenu}
                            className="gallery-dishes"
                            key={`ImageInterior-foodGallery-${idx}`}
                        />
                    ))}
                </ul>

                <Button
                    route={routes.gallery}
                    textContent="Дивитись усю галерею"
                    onClick={() => scrollToTop("auto")}
                    className="max-w-[250px] mx-auto font-medium font-thirdFont"
                />
            </div>
        </section>
    );
};
