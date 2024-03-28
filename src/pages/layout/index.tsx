import clsx from "clsx";
import { Outlet } from "react-router-dom";

// import ImgBanner from '../../assets/img/house.jpg';

import { Up } from "../../assets/svg";
import { useScroll } from "../../hook";
import { scrollToTop } from "../../helpers";
import { Footer, Header, GoogleMaps, MainGallery } from "../../components";

export const Layout = () => {
    const { scrollY } = useScroll();
    const isBtn = scrollY > 100;

    return (
        <>
            <Header />

            <Outlet />

            <MainGallery />

            <GoogleMaps />

            <Footer />

            {isBtn && (
                <button
                    onClick={() => scrollToTop()}
                    className={clsx(
                        "fixed bg-gray-800 rounded w-[34px] h-[38px] z-[1000] right-[20px] bottom-[38px] animate-fadeIn delay-75"
                    )}
                >
                    <Up className="w-full" />
                </button>
            )}
        </>
    );
};
