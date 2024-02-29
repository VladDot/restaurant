import {
    Greetings,
    MainBanner,
    FoodGallery,
    EventsPromotions,
} from "../../components";

export const Home = () => {
    return (
        <>
            <MainBanner />
            <Greetings />

            <EventsPromotions />

            <FoodGallery className="container" />
        </>
    );
};
