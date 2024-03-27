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

export const imgSrs = [Img, Img2, Img3, Img4, Img5, Img6, Img7, Img8];

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

export const tmpSrc = [
  {
    id: 1,
    title: 'welcome to',
    content: 'To our family restaurant "SETI"',
    imgUrl: Img,
  },
  {
    id: 2,
    title: 'stylish place',
    content: 'For banquets and corporate events',
    imgUrl: Img2,
  },
  {
    id: 3,
    title: 'Gourmet cuisine',
    content: 'Refinement and naturalness',
    imgUrl: Img3,
  },
  {
    id: 3,
    title: 'business lunch time',
    content: 'From 12 to 16 on weekdays there is a -20% discount on the entire menu',
    imgUrl: Img4,
  },
];

const titleFoodMenu = [
  'Холодні закуски',
  'Гарячі закуски',
  'Салати',
  'Паста та різотто',
  'Супи',
  'Гарніри',
  "М'ясні страви",
  'Рибні страви',
  'Роли та суші-салати',
  'Мангал меню',
  'Дитяче меню',
  'Десерти',
  'Випечка',
];

export const tmpSrc1 = imgSrs.map((imgUrl, index) => {
  return {
    imgUrl,
    title: title[index],
    aspectGallery: aspectGallery[index],
    aspectMenu: aspectMenu[index],
    content: content[index],
  };
});

export interface IInteriorGallery {
  imgUrl: string;
  id: string;
}

export const interiorGallery: IInteriorGallery[] = [
  {
    imgUrl: Img,
    id: '1',
  },
  {
    imgUrl: Img,
    id: '2',
  },
  {
    imgUrl: Img2,
    id: '3',
  },
  {
    imgUrl: Img3,
    id: '4',
  },
  {
    imgUrl: Img4,
    id: '5',
  },
  {
    imgUrl: Img5,
    id: '6',
  },
  {
    imgUrl: Img6,
    id: '7',
  },
  {
    imgUrl: Img7,
    id: '8',
  },
  {
    imgUrl: Img8,
    id: '9',
  },
  {
    imgUrl: Img8,
    id: '10',
  },
  {
    imgUrl: Img2,
    id: '11',
  },
  {
    imgUrl: Img3,
    id: '12',
  },
  {
    imgUrl: Img,
    id: '13',
  },
];

export const tmpSrcFood = imgSrsFood.map((imgUrl, index) => {
  return {
    imgUrl,
    aspectMenu: aspectMenu[index],
    title: titleFoodMenu[index],
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

/* export const food; */

export interface ISubCategoryLink {
  name: string;
  url: string;
  title: string;
  img?: string;
  id: string;
}

export interface NavBarLink {
  url: string;
  name: string;
  title: string;
  height?: string;
  categories?: ISubCategoryLink[];
}

export interface ICategoriesMenuProps {
  name: string;
  url: string;
  title: string;
  img: string;
  id: string;
}

export const categoriesMenu: ICategoriesMenuProps[] = [
  {
    name: 'wok',
    url: routes.menuCategory.wok,
    title: 'WOK',
    img: Img,
    id: 'categoriesMenu-1',
  },
  {
    name: 'pasta',
    url: routes.menuCategory.pasta,
    title: 'PAST',
    img: Img,
    id: 'categoriesMenu-2',
  },
  {
    name: 'soups',
    url: routes.menuCategory.soups,
    title: 'SOUPS',
    img: Img,
    id: 'categoriesMenu-3',
  },
  {
    name: 'salads',
    url: routes.menuCategory.salads,
    title: 'SALADS',
    img: Img,
    id: 'categoriesMenu-4',
  },
  {
    name: 'desserts',
    url: routes.menuCategory.desserts,
    title: 'DESSERTS',
    img: Img,
    id: 'categoriesMenu-5',
  },
  {
    name: 'pastries',
    url: routes.menuCategory.pastries,
    title: 'PASTRIES',
    img: Img,
    id: 'categoriesMenu-6',
  },
  {
    name: 'grillMenu',
    url: routes.menuCategory.grillMenu,
    title: 'GRILL MENU',
    img: Img,
    id: 'categoriesMenu-7',
  },
  {
    name: 'meatDishes',
    url: routes.menuCategory.meatDishes,
    title: 'MEAT DISHES',
    img: Img,
    id: 'categoriesMenu-8',
  },
  {
    name: 'fishDishes',
    url: routes.menuCategory.fishDishes,
    title: 'FISH DISHES',
    img: Img,
    id: 'categoriesMenu-9',
  },
  {
    name: 'sideDishes',
    url: routes.menuCategory.sideDishes,
    title: 'SIDE DISHES',
    img: Img,
    id: 'categoriesMenu-10',
  },
  {
    name: 'banquetMenu',
    url: routes.banquetCategory.banquetMenu,
    title: 'BANQUET MENU',
    img: Img,
    id: 'categoriesMenu-11',
  },
  {
    name: 'childrenMenu',
    url: routes.menuCategory.childrenMenu,
    title: 'CHILDREN MENU ',
    img: Img,
    id: 'categoriesMenu-12',
  },
  {
    name: 'hotAppetizers',
    url: routes.menuCategory.hotAppetizers,
    title: 'HOT APPETIZERS',
    img: Img,
    id: 'categoriesMenu-13',
  },
  {
    name: 'coldAppetizers',
    url: routes.menuCategory.coldAppetizers,
    title: 'COLD APPETIZERS',
    img: Img,
    id: 'categoriesMenu-14',
  },
  {
    name: 'rollsAndSpringRolls',
    url: routes.menuCategory.rollsAndSpringRolls,
    title: 'ROLLS AND SPRING ROLLS',
    img: Img,
    id: 'categoriesMenu-15',
  },
];

export const filteredCategoriesMenu = categoriesMenu.filter(
  (item) => item.id !== 'categoriesMenu-1' && item.id !== 'categoriesMenu-11'
);

export const navBar: NavBarLink[] = [
  { name: 'about-us', url: routes.about, title: 'ABOUT US' },

  {
    name: 'menu',
    url: routes.menu,
    title: 'MENU',
    categories: categoriesMenu,
  },
  { name: 'bar', url: routes.bar, title: 'BAR' },
  {
    name: 'banquet',
    url: routes.banquet,
    title: 'BANQUET',
    categories: [
      {
        name: 'menuBanquet',
        url: routes.banquetCategory.banquetMenu,
        title: 'MENU BANQUET',
        id: 'banquetCategories-1',
      },
    ],
  },
  {
    name: 'gallery',
    url: routes.gallery,
    title: 'GALLERY',
    categories: [
      {
        name: 'restaurantMenu',
        url: routes.galleryCategory.restaurantMenu,
        title: 'RESTAURANT MENU',
        id: 'galleryCategories-1',
      },
      {
        name: 'interiorOfTheRestaurant',
        url: routes.galleryCategory.interiorOfTheRestaurant,
        title: 'INTERIOR OF THE RESTAURANT',
        id: 'galleryCategories-2',
      },

      {
        name: 'sophisticationInEveryDetail',
        url: routes.galleryCategory.sophisticationInEveryDetail,
        title: 'SOPHISTICATION IN EVERY DETAIL',
        id: 'galleryCategories-3',
      },
    ],
  },
  { name: 'blog', url: routes.blog, title: 'BLOG' },
  { name: 'contacts', url: routes.contacts, title: 'CONTACTS' },
];
export interface ICardCategoryProps {
  idCategory: string;
  imgCategory: string;
  dishes: {
    idDishes: string;
    nameDish: string;
    prise: string;
    weight: string;
  }[];
}

export const cardCategory: ICardCategoryProps[] = [
  {
    idCategory: 'card-dish',
    imgCategory: Images.Menu,
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
  },
  {
    idCategory: 'card-dish',
    imgCategory: Images.Menu,
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
  },
];

export const banquetBenefitsMock = [
  {
    title: 'Перший поверх 15-25 гостей',
    text: 'Підходить для проведення невеликого сімейного свята або банкету',
    imgSrc: Img,
    link: routes.gallery,
    technicalEquipment:
      'Перший поверх обладнаний 3 плазмами 52 діагоналі, загальною звуковою системою. Є можливість встановити портативну колонку + естрадний радіомікрофон Сінхайзер.',
  },
  {
    title: 'Перший поверх 15-25 гостей',
    text: 'Підходить для проведення невеликого сімейного свята або банкету',
    imgSrc: Img2,
    link: routes.gallery,
    technicalEquipment:
      'Перший поверх обладнаний 3 плазмами 52 діагоналі, загальною звуковою системою. Є можливість встановити портативну колонку + естрадний радіомікрофон Сінхайзер.',
  },
  {
    title: 'Перший поверх 15-25 гостей',
    text: 'Підходить для проведення невеликого сімейного свята або банкету',
    imgSrc: Img3,
    link: routes.gallery,
    technicalEquipment:
      'Перший поверх обладнаний 3 плазмами 52 діагоналі, загальною звуковою системою. Є можливість встановити портативну колонку + естрадний радіомікрофон Сінхайзер.',
  },
  {
    title: 'Перший поверх 15-25 гостей',
    text: 'Підходить для проведення невеликого сімейного свята або банкету',
    imgSrc: Img4,
    link: routes.gallery,
    technicalEquipment:
      'Перший поверх обладнаний 3 плазмами 52 діагоналі, загальною звуковою системою. Є можливість встановити портативну колонку + естрадний радіомікрофон Сінхайзер.',
  },
];
