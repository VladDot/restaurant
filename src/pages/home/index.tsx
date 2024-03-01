import { Greetings, MainBanner, FoodGallery, EventsPromotions } from '../../components';

//TODO  BasicMenu

export const Home = () => {
  return (
    <>
      <MainBanner />

      <Greetings />

      <EventsPromotions />

      {/* <BasicMenu /> */}

      <FoodGallery className='container' />
    </>
  );
};
