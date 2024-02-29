import { Title } from "../title";
import { SubTitle } from "../subtitle";

import Img8 from "../../assets/img/mainList/restaurant-seti-17.jpg";
import { OrganizationСard } from "./event-card";

export const CorporateEvents = () => {
    return (
        <section className="py-5">
            <Title
                text=" ПРИВАТНІ ТА КОРПОРАТИВНІ ЗАХОДИ"
                className="text-secondText md:text-lg mb-2.5 md:mb-5 text-[18px] px-1"
            />

            <SubTitle
                text="Організація банкетів у ресторані"
                className="text-[26px] md:text-[42px] mb-5 md:mb-8 text-black px-1"
            />

            <div className="lg:flex">
                <OrganizationСard
                    img={Img8}
                    className="h-full"
                />

                <OrganizationСard
                    img={Img8}
                    className="h-[90%]"
                />
            </div>
        </section>
    );
};
