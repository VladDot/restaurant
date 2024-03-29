import { Banner, FormBooking, OurContacts } from "../../components";

import ImgBanner from "../../assets/img/house.jpg";

export const Contacts = () => {
    return (
        <>
            <Banner
                title="title"
                src={ImgBanner}
                content="content"
            />

            <OurContacts />

            <FormBooking />
        </>
    );
};
