import { Outlet } from "react-router-dom";
import { Header } from "../../components";

export const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <h1>footer</h1>
        </>
    );
};
