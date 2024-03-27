import {
  Greetings,
  MainBanner,
  FoodGallery,
  EventsPromotions,
  BasicMenu,
  PrevueMenu,
} from '../../components';
import { categoriesMenu } from '../../mock';

import Images from '../../assets/img/vegetarian-big-item4.png';
import { routes } from '../../constants/routes';

export interface IPrevueMenuMockProps {
  idCategory: string;
  imgCategory: string;
  title: string;
  subTitle: string;
  route: string;
  textContent: string;
  dishes: {
    idDishes: string;
    nameDish: string;
    prise: string;
    weight: string;
  }[];
}

const prevueMenuMock: IPrevueMenuMockProps = {
  idCategory: 'card-dish',
  imgCategory: Images,
  title: 'sweet',
  subTitle: 'dessert menu',
  route: routes.menuCategory.desserts,
  textContent: 'Go to menu',
  dishes: [
    {
      idDishes: 'dish-1',
      nameDish: 'Бельгійські вафлі з мусом з лососем та авокадо',
      prise: '249',
      weight: '215',
    },
    {
      idDishes: 'dish-2',
      nameDish: 'Ікра щуки з тостами',
      prise: '650',
      weight: '150',
    },
    {
      idDishes: 'dish-2',
      nameDish: 'Ікра щуки з тостами',
      prise: '650',
      weight: '150',
    },
    {
      idDishes: 'dish-2',
      nameDish: 'Ікра щуки з тостами',
      prise: '650',
      weight: '150',
    },
    {
      idDishes: 'dish-2',
      nameDish: 'Ікра щуки з тостами',
      prise: '650',
      weight: '150',
    },
    {
      idDishes: 'dish-2',
      nameDish: 'Ікра щуки з тостами',
      prise: '650',
      weight: '150',
    },
    {
      idDishes: 'dish-2',
      nameDish: 'Ікра щуки з тостами',
      prise: '650',
      weight: '150',
    },
    {
      idDishes: 'dish-2',
      nameDish: 'Ікра щуки з тостами',
      prise: '650',
      weight: '150',
    },
  ],
};

//TODO  BasicMenu

export const Home = () => {
  return (
    <>
      <MainBanner />

      <Greetings />

      <EventsPromotions />

      <BasicMenu categoriesMenu={categoriesMenu} />

      <PrevueMenu {...prevueMenuMock} />

      <FoodGallery className='container' />
    </>
  );
};
