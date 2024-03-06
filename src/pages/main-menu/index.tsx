import { Banner, MenuCategories } from '../../components';

import ImgBanner from '../../assets/img/house.jpg';

export const Menu = () => {
  return (
    <>
      <Banner title='title' content='content' src={ImgBanner} />
      <MenuCategories />
    </>
  );
};
