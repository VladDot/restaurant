import {
    Banner,
    AboutUsInfo,
    FoodGallery,
    FormBooking,
} from "../../components";

export const About = () => {
    return (
        <>
            <Banner
                title="title"
                content="content"
            />

            <AboutUsInfo />

            <FormBooking />

            <FoodGallery />
        </>
    );
};
