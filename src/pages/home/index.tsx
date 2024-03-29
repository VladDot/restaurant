import { categoriesMenu } from "../../mock";

import { routes } from "../../constants/routes";

import {
    Greetings,
    BasicMenu,
    MainBanner,
    PrevueMenu,
    FoodGallery,
    EventsPromotions,
} from "../../components";

import Images from "../../assets/img/vegetarian-big-item4.png";

export interface IPrevueMenuMockProps {
    title: string;
    route: string;
    subTitle: string;
    idCategory: string;
    imgCategory: string;
    textContent: string;
    dishes: {
        prise: string;
        weight: string;
        idDishes: string;
        nameDish: string;
    }[];
}

const prevueMenuMock: IPrevueMenuMockProps = {
    title: "sweet",
    imgCategory: Images,
    idCategory: "card-dish",
    subTitle: "dessert menu",
    textContent: "Go to menu",
    route: routes.menuCategory.desserts,
    dishes: [
        {
            idDishes: "dish-1",
            nameDish: "Бельгійські вафлі з мусом з лососем та авокадо",
            prise: "249",
            weight: "215",
        },
        {
            idDishes: "dish-2",
            nameDish: "Ікра щуки з тостами",
            prise: "650",
            weight: "150",
        },
        {
            idDishes: "dish-2",
            nameDish: "Ікра щуки з тостами",
            prise: "650",
            weight: "150",
        },
        {
            idDishes: "dish-2",
            nameDish: "Ікра щуки з тостами",
            prise: "650",
            weight: "150",
        },
        {
            idDishes: "dish-2",
            nameDish: "Ікра щуки з тостами",
            prise: "650",
            weight: "150",
        },
        {
            idDishes: "dish-2",
            nameDish: "Ікра щуки з тостами",
            prise: "650",
            weight: "150",
        },
        {
            idDishes: "dish-2",
            nameDish: "Ікра щуки з тостами",
            prise: "650",
            weight: "150",
        },
        {
            idDishes: "dish-2",
            nameDish: "Ікра щуки з тостами",
            prise: "650",
            weight: "150",
        },
    ],
};

export const Home = () => {
    return (
        <>
            <MainBanner />

            <Greetings />

            <EventsPromotions />

            <BasicMenu categoriesMenu={categoriesMenu} />

            <PrevueMenu {...prevueMenuMock} />

            <FoodGallery className="container" />
        </>
    );
};
