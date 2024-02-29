import {
    Banner,
    BanquetBenefits,
    CorporateEvents,
    FAQs,
    FormBooking,
    OrganizationBanquets,
    RequestCallback,
    RestaurantAreas,
} from "../../components";

import ImgBanner from "../../assets/img/house.jpg";

export const Banquet = () => {
    return (
        <>
            <Banner
                src={ImgBanner}
                content="content"
                title="title"
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
