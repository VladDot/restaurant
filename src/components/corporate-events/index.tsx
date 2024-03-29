import { Title } from "../title";
import { SubTitle } from "../subtitle";
import { OrganizationСard } from "./event-card";

import Img8 from "../../assets/img/mainList/restaurant-seti-17.jpg";

export const CorporateEvents = () => {
    return (
        <section className="py-5">
            <Title
                text=" ПРИВАТНІ ТА КОРПОРАТИВНІ ЗАХОДИ"
                className="sectionTitle md:text-lg mb-2.5 md:mb-5"
            />

            <SubTitle
                text="Організація банкетів у ресторані"
                className="sectionSubTitle mb-5 md:mb-8 "
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
