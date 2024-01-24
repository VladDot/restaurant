import { routes } from "../../constants/routes";

export interface NavBarLink {
    name: string;
    url: string;
    title: string;
    category?: NavBarLink[];
}

export const navBar: NavBarLink[] = [
    { name: "about-us", url: routes.about, title: "ABOUT US" },

    {
        name: "menu",
        url: routes.menu,
        title: "MENU",
        category: [
            {
                name: "wok",
                url: routes.menuCategory.wok,
                title: "WOR",
            },
            {
                name: "pasta",
                url: routes.menuCategory.pasta,
                title: "PAST",
            },
            {
                name: "soups",
                url: routes.menuCategory.soups,
                title: "SOUPS",
            },
            {
                name: "salads",
                url: routes.menuCategory.salads,
                title: "SALADS",
            },
            {
                name: "desserts",
                url: routes.menuCategory.desserts,
                title: "DESSERTS",
            },
            {
                name: "pastries",
                url: routes.menuCategory.pastries,
                title: "PASTRIES",
            },
            {
                name: "grillMenu",
                url: routes.menuCategory.grillMenu,
                title: "GRILL MENU",
            },
            {
                name: "meatDishes",
                url: routes.menuCategory.meatDishes,
                title: "MEAT DISHES",
            },
            {
                name: "fishDishes",
                url: routes.menuCategory.fishDishes,
                title: "FISH DISHES",
            },
            {
                name: "sideDishes",
                url: routes.menuCategory.sideDishes,
                title: "SIDE DISHES",
            },
            {
                name: "banquetMenu",
                url: routes.menuCategory.banquetMenu,
                title: "BANQUET MENU",
            },
            {
                name: "childrenMenu",
                url: routes.menuCategory.childrenMenu,
                title: "CHILDREN MENU ",
            },
            {
                name: "hotAppetizers",
                url: routes.menuCategory.hotAppetizers,
                title: "HOT APPETIZERS",
            },
            {
                name: "coldAppetizers",
                url: routes.menuCategory.coldAppetizers,
                title: "COLD APPETIZERS",
            },
            {
                name: "rollsAndSpringRolls",
                url: routes.menuCategory.rollsAndSpringRolls,
                title: "ROLLS AND SPRING ROLLS",
            },
        ],
    },
    { name: "bar", url: routes.bar, title: "BAR" },
    {
        name: "banquet",
        url: routes.banquet,
        title: "BANQUET",
        category: [
            {
                name: "menuBanquet",
                url: routes.banquetCategory.banquetMenu,
                title: "MENU BANQUET",
            },
        ],
    },
    {
        name: "gallery",
        url: routes.gallery,
        title: "GALLERY",
        category: [
            {
                name: "restaurantMenu",
                url: routes.galleryCategory.restaurantMenu,
                title: "RESTAURANT MENU",
            },
            {
                name: "interiorOfTheRestaurant",
                url: routes.galleryCategory.interiorOfTheRestaurant,
                title: "INTERIOR OF THE RESTAURANT",
            },

            {
                name: "sophisticationInEveryDetail",
                url: routes.galleryCategory.sophisticationInEveryDetail,
                title: "SOPHISTICATION IN EVERY DETAIL",
            },
        ],
    },
    { name: "blog", url: routes.blog, title: "BLOG" },
    { name: "contacts", url: routes.contacts, title: "CONTACTS" },
];
