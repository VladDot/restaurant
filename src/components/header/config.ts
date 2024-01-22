import { routes } from "../../constants/routes";

export interface NavBarLink {
    name: string;
    url: string;
    category?: NavBarLink[];
}

export const navBar: NavBarLink[] = [
    { name: "about-us", url: routes.about },

    {
        name: "menu",
        url: routes.menu,
        category: [
            {
                name: "wok",
                url: routes.menuCategory.wok,
            },
            {
                name: "pasta",
                url: routes.menuCategory.pasta,
            },
            {
                name: "soups",
                url: routes.menuCategory.soups,
            },
            {
                name: "salads",
                url: routes.menuCategory.salads,
            },
            {
                name: "desserts",
                url: routes.menuCategory.desserts,
            },
            {
                name: "pastries",
                url: routes.menuCategory.pastries,
            },
            {
                name: "grillMenu",
                url: routes.menuCategory.grillMenu,
            },
            {
                name: "meatDishes",
                url: routes.menuCategory.meatDishes,
            },
            {
                name: "fishDishes",
                url: routes.menuCategory.fishDishes,
            },
            {
                name: "sideDishes",
                url: routes.menuCategory.sideDishes,
            },
            {
                name: "banquetMenu",
                url: routes.menuCategory.banquetMenu,
            },
            {
                name: "childrenMenu",
                url: routes.menuCategory.childrenMenu,
            },
            {
                name: "hotAppetizers",
                url: routes.menuCategory.hotAppetizers,
            },
            {
                name: "coldAppetizers",
                url: routes.menuCategory.coldAppetizers,
            },
            {
                name: "rollsAndSpringRolls",
                url: routes.menuCategory.rollsAndSpringRolls,
            },
        ],
    },
    { name: "bar", url: routes.bar },
    {
        name: "banquet",
        url: routes.banquet,
        category: [
            { name: "menuBanquet", url: routes.banquetCategory.banquetMenu },
        ],
    },
    {
        name: "gallery",
        url: routes.gallery,
        category: [
            {
                name: "restaurantMenu",
                url: routes.galleryCategory.restaurantMenu,
            },
            {
                name: "interiorOfTheRestaurant",
                url: routes.galleryCategory.interiorOfTheRestaurant,
            },

            {
                name: "sophisticationInEveryDetail",
                url: routes.galleryCategory.sophisticationInEveryDetail,
            },
        ],
    },
    { name: "blog", url: routes.blog },
    { name: "contacts", url: routes.contacts },
];
