import { createBrowserRouter } from "react-router-dom";

import { routes } from "../constants/routes";
import {
    Bar,
    Blog,
    Home,
    Menu,
    About,
    Admin,
    Login,
    Layout,
    Banquet,
    Gallery,
    Contacts,
    Registration,
    PrivateOffice,
} from "../pages";

export const router = createBrowserRouter([
    {
        path: routes.home,
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: routes.menu,

                children: [
                    { index: true, element: <Menu /> },
                    {
                        path: routes.menuCategory.banquetMenu,
                        element: <h1 className=""> BANQUET MENU</h1>,
                    },
                    {
                        path: routes.menuCategory.childrenMenu,
                        element: <h1 className=""> childrenMenu MENU</h1>,
                    },
                    {
                        path: routes.menuCategory.coldAppetizers,
                        element: <h1 className=""> coldAppetizers MENU</h1>,
                    },
                    {
                        path: routes.menuCategory.desserts,
                        element: <h1 className=""> desserts MENU</h1>,
                    },
                    {
                        path: routes.menuCategory.fishDishes,
                        element: <h1 className=""> fishDishes MENU</h1>,
                    },
                    {
                        path: routes.menuCategory.grillMenu,
                        element: <h1 className=""> grillMenu MENU</h1>,
                    },
                    {
                        path: routes.menuCategory.hotAppetizers,
                        element: <h1 className=""> hotAppetizers MENU</h1>,
                    },
                    {
                        path: routes.menuCategory.meatDishes,
                        element: <h1 className=""> meatDishes MENU</h1>,
                    },
                    {
                        path: routes.menuCategory.pasta,
                        element: <h1 className=""> pasta MENU</h1>,
                    },
                    {
                        path: routes.menuCategory.pastries,
                        element: <h1 className=""> pastries MENU</h1>,
                    },
                    {
                        path: routes.menuCategory.rollsAndSpringRolls,
                        element: (
                            <h1 className=""> rollsAndSpringRolls MENU</h1>
                        ),
                    },
                    {
                        path: routes.menuCategory.salads,
                        element: <h1 className=""> salads MENU</h1>,
                    },
                    {
                        path: routes.menuCategory.sideDishes,
                        element: <h1 className=""> sideDishes MENU</h1>,
                    },
                    {
                        path: routes.menuCategory.soups,
                        element: <h1 className=""> soups MENU</h1>,
                    },
                    {
                        path: routes.menuCategory.wok,
                        element: <h1 className=""> wok MENU</h1>,
                    },
                    {
                        path: routes.menuCategory.garnishes,
                        element: <h1 className=""> garnishes MENU</h1>,
                    },
                    {
                        path: routes.menuCategory.garnishes,
                        element: <h1 className=""> garnishes MENU</h1>,
                    },
                ],
            },

            {
                path: routes.bar,
                element: <Bar />,
            },
            {
                path: routes.blog,
                element: <Blog />,
            },
            {
                path: routes.about,
                element: <About />,
            },
            {
                path: routes.contacts,
                element: <Contacts />,
            },

            {
                path: routes.login,
                element: <Login />,
            },
            {
                path: routes.gallery,
                element: <Gallery />,
            },
            {
                path: routes.banquet,
                element: <Banquet />,
            },
            {
                path: routes.registration,
                element: <Registration />,
            },
            {
                path: routes.privateOffice,
                element: <PrivateOffice />,
            },
        ],
    },
    {
        path: routes.admin,
        element: <Admin />,
    },
]);
