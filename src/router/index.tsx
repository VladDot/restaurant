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
    BanquetMenu,
    ImageParams,
    Registration,
    PrivateOffice,
} from "../pages";

import { Errors } from "../components";
import { MenuParams } from "../pages/menu-params";

export const router = createBrowserRouter([
    {
        path: routes.home,
        errorElement: (
            <Errors
                text="HOME"
                url="/"
            />
        ),
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "menu/:categories",
                element: <MenuParams />,
            },
            {
                path: routes.menu,
                element: <Menu />,
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
            { path: "gallery/:categories", element: <ImageParams /> },

            {
                path: routes.banquet,
                children: [
                    {
                        index: true,
                        element: <Banquet />,
                    },
                    {
                        path: routes.banquetCategory.banquetMenu,
                        element: <BanquetMenu />,
                    },
                ],
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
