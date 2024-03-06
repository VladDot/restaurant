import { Greetings, MainBanner, FoodGallery, EventsPromotions, BasicMenu } from '../../components';
import { categoriesMenu } from '../../mock';

//TODO  BasicMenu

export const Home = () => {
  return (
    <>
      <MainBanner />

      <Greetings />

      <EventsPromotions />

      <BasicMenu categoriesMenu={categoriesMenu} />

      <FoodGallery className='container' />
    </>
  );
};
