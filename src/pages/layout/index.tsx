import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../components";

export const Layout = () => {
    return (
        <>
            <Header />
            <div className="mb-32 min-h-[calc(100vh-214px)] minSm:min-h-[calc(100vh-184px)] ">
                <Outlet />
            </div>

            <Footer />
        </>
    );
};
