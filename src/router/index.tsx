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
                        element: <h1> BANQUET MENU</h1>,
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
