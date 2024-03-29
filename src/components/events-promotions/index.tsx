import { Link } from "react-router-dom";

import { Title } from "../title";

import { eventsLink } from "../../mock";
import { scrollToTop } from "../../helpers";

export const EventsPromotions = () => {
    return (
        <section className="bg-secondBg flex flex-col gap-6 py-6">
            <Title
                uppercase
                className="sectionTitle"
                text="EVENTS AND PROMOTIONS IN THE RESTAURANT"
            />

            <div className="max-w-[1110px] w-full flex flex-wrap justify-around m-auto gap-2">
                {eventsLink.map(({ id, link, srcImg }) => {
                    return (
                        <Link
                            to={link}
                            className="max-w-[310px]"
                            key={`event-prom-card-${id}`}
                            onClick={() => scrollToTop("auto")}
                        >
                            <img
                                src={srcImg}
                                alt="img menu"
                                className="w-full max-w-[310px]"
                            />
                        </Link>
                    );
                })}
            </div>
        </section>
    );
};
