import { Banner, FormBooking, OurContacts } from '../../components';

import ImgBanner from '../../assets/img/house.jpg';

export const Contacts = () => {
  return (
    <>
      <Banner content='content' title='title' src={ImgBanner} />
      <OurContacts />
      <FormBooking />
      <h1>h</h1>
    </>
  );
};
