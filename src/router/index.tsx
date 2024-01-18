import {createBrowserRouter} from "react-router-dom";
import {Layout} from "../pages";
import {routes} from "../constants/routes";

export const router = createBrowserRouter([
    {
        path: routes.home,
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <h2>Home main</h2>
            },
            {
                path: routes.menu,
                element: <h2>menu</h2>,
            },
            {
                path: routes.gallery,
                element: <h2>gallery</h2>,
            },
            {
                path: routes.about,
                element: <h2>about</h2>,
            },
            {
                path: routes.banquet,
                element: <h2>banquet</h2>,
            },
            {
                path: routes.login,
                element: <h2>login</h2>,
            },
            {
                path: routes.registration,
                element: <h2>registration</h2>,
            },
            {
                path: routes.privateOffice,
                element: <h2>privateOffice</h2>,
            }
        ]
    },
    {
        path: routes.admin,
        element:<h2>admin</h2>
    }
]);