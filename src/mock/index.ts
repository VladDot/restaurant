import Img from '../assets/img/mainList/restaurant-seti-01.jpg';
import Img2 from '../assets/img/mainList/restaurant-seti-02.jpg';
import Img3 from '../assets/img/mainList/restaurant-seti-03.jpg';
import Img4 from '../assets/img/mainList/restaurant-seti-04.jpg';
import Img5 from '../assets/img/mainList/restaurant-seti-05.jpg';
import Img6 from '../assets/img/mainList/restaurant-seti-06.jpg';
import Img7 from '../assets/img/mainList/restaurant-seti-16.jpg';
import Img8 from '../assets/img/mainList/restaurant-seti-17.jpg';

import { routes } from '../constants/routes';

import * as Images from '../assets/img';

const imgSrs = [Img, Img2, Img3, Img4, Img5, Img6, Img7, Img8];

const imgSrsFood = [Img, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img8, Img8, Img8, Img8];
const aspectGallery = [
  'aspect-[1.91]',
  'aspect-[1]',
  'aspect-[1.5]',
  'aspect-[1]',
  'aspect-[0.8]',
  'aspect-[1.5]',
  'aspect-[1]',
  'aspect-[1.5]',
];
const aspectMenu = [
  'aspect-[1.499]',
  'aspect-[1.499]',
  'aspect-[1]',
  'aspect-[1]',
  'aspect-[1]',
  'aspect-[1]',
  'aspect-[1.499]',
  'aspect-[1.499]',
  'aspect-[1]',
  'aspect-[1]',
  'aspect-[1]',
  'aspect-[1]',
];
const content = [
  'content',
  'content2',
  'content3',
  'content4',
  'content5',
  'content6',
  'content7',
  'content8',
];
const title = ['title', 'title2', 'title3', 'title4', 'title5', 'title6', 'title7', 'title8'];

export const tmpSrc = imgSrs.map((imgUrl, index) => {
  return {
    imgUrl,
    title: title[index],
    aspectGallery: aspectGallery[index],
    aspectMenu: aspectMenu[index],
    content: content[index],
  };
});

export const tmpSrcFood = imgSrsFood.map((imgUrl, index) => {
  return {
    imgUrl,
    aspectMenu: aspectMenu[index],
  };
});

interface IEventsLink {
  id: string;
  link: string;
  srcImg: string;
}

export const eventsLink: IEventsLink[] = [
  {
    id: 'menu',
    link: routes.menu,
    srcImg: Images.Menu,
  },

  {
    id: 'bar',
    link: routes.bar,
    srcImg: Images.Bar,
  },
];

export const cardCategory = [
  {
    id: 'card-dish',
    imgCategory: Images.Menu,
    dishes: [
      {
        id: 'dish-1',
        nameDish: 'Бельгійські вафлі з мусом з лососем та авокадо',
        prise: '249',
        weight: '215',
      },
      {
        id: 'dish-2',
        nameDish: 'Ікра щуки з тостами',
        prise: '650',
        weight: '150',
      },
      {
        id: 'dish-2',
        nameDish: 'Ікра щуки з тостами',
        prise: '650',
        weight: '150',
      },
      {
        id: 'dish-2',
        nameDish: 'Ікра щуки з тостами',
        prise: '650',
        weight: '150',
      },
      {
        id: 'dish-2',
        nameDish: 'Ікра щуки з тостами',
        prise: '650',
        weight: '150',
      },
      {
        id: 'dish-2',
        nameDish: 'Ікра щуки з тостами',
        prise: '650',
        weight: '150',
      },
      {
        id: 'dish-2',
        nameDish: 'Ікра щуки з тостами',
        prise: '650',
        weight: '150',
      },
      {
        id: 'dish-2',
        nameDish: 'Ікра щуки з тостами',
        prise: '650',
        weight: '150',
      },
    ],
  },
  {
    id: 'card-dish',
    imgCategory: Images.Menu,
    dishes: [
      {
        id: 'dish-1',
        nameDish: 'Бельгійські вафлі з мусом з лососем та авокадо',
        prise: '249',
        weight: '215',
      },
      {
        id: 'dish-2',
        nameDish: 'Ікра щуки з тостами',
        prise: '650',
        weight: '150',
      },
      {
        id: 'dish-2',
        nameDish: 'Ікра щуки з тостами',
        prise: '650',
        weight: '150',
      },
      {
        id: 'dish-2',
        nameDish: 'Ікра щуки з тостами',
        prise: '650',
        weight: '150',
      },
      {
        id: 'dish-2',
        nameDish: 'Ікра щуки з тостами',
        prise: '650',
        weight: '150',
      },
      {
        id: 'dish-2',
        nameDish: 'Ікра щуки з тостами',
        prise: '650',
        weight: '150',
      },
      {
        id: 'dish-2',
        nameDish: 'Ікра щуки з тостами',
        prise: '650',
        weight: '150',
      },
      {
        id: 'dish-2',
        nameDish: 'Ікра щуки з тостами',
        prise: '650',
        weight: '150',
      },
    ],
  },
  {
    id: 'card-dish',
    imgCategory: Images.Menu,
    dishes: [
      {
        id: 'dish-1',
        nameDish: 'Бельгійські вафлі з мусом з лососем та авокадо',
        prise: '249',
        weight: '215',
      },
      {
        id: 'dish-2',
        nameDish: 'Ікра щуки з тостами',
        prise: '650',
        weight: '150',
      },
      {
        id: 'dish-2',
        nameDish: 'Ікра щуки з тостами',
        prise: '650',
        weight: '150',
      },
      {
        id: 'dish-2',
        nameDish: 'Ікра щуки з тостами',
        prise: '650',
        weight: '150',
      },
      {
        id: 'dish-2',
        nameDish: 'Ікра щуки з тостами',
        prise: '650',
        weight: '150',
      },
      {
        id: 'dish-2',
        nameDish: 'Ікра щуки з тостами',
        prise: '650',
        weight: '150',
      },
      {
        id: 'dish-2',
        nameDish: 'Ікра щуки з тостами',
        prise: '650',
        weight: '150',
      },
      {
        id: 'dish-2',
        nameDish: 'Ікра щуки з тостами',
        prise: '650',
        weight: '150',
      },
    ],
  },
];
