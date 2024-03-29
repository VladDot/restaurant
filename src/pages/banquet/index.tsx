import {
    FAQs,
    Banner,
    FormBooking,
    BanquetBenefits,
    CorporateEvents,
    RequestCallback,
    RestaurantAreas,
    OrganizationBanquets,
} from "../../components";

import ImgBanner from "../../assets/img/house.jpg";

export const Banquet = () => {
    return (
        <>
            <Banner
                title="title"
                src={ImgBanner}
                content="content"
            />

            <RequestCallback />

            <CorporateEvents />

            <RestaurantAreas />

            <OrganizationBanquets />

            <FAQs />

            <BanquetBenefits />

            <FormBooking />
        </>
    );
};
