import ImgUrl from '../assets/img/blog/8-march_2023-motion-1080x1080_thumbnail.png';

interface IDescriptionListProps {
  list?: string;
}
export interface IMokCardNewsProps {
  id: string;
  info?: string;
  title: string;
  imgUrl?: string;
  imgAlt?: string;
  content?: string;
  eventDate?: string;
  imgUrlPage?: string;
  datePublish?: string;
  description?: string;
  imgUrlPageAlt?: string;
  restaurantName?: string;
  reservationOfTables?: string;
  descriptionContent?: IDescriptionListProps[];
}

export const mokCardNews: IMokCardNewsProps[] = [
  {
    imgAlt: '',
    info: 'info',
    id: 'March_8',
    imgUrl: ImgUrl,
    imgUrlPage: ImgUrl,
    imgUrlPageAlt: 'qweqwe',
    datePublish: 'March 05, 2023',
    eventDate: 'March 8 at 18:00',
    restaurantName: 'to the S#TI restaurant',
    reservationOfTables: 'reservationOfTables',
    description: 'The program of the celebration:',
    title: '8 March "International Women`s Day» SETi',
    content: 'We invite you to the celebration of "International Women`s Day"',
    descriptionContent: [
      {
        list: '- Well-come drink Decordi Prosecco Frizzante with the opportunity to win a real diamond from Zarina Law Firm @zarina_dnepr;',
      },
      {
        list: '- author`s set menu from our chef*.',
      },
      {
        list: '- a fun and incendiary program with contests and raffles from the host of the evening, stand-up comedian Roman Khramenkov @roman_khramenkov',
      },
      {
        list: '- exquisite and powerful vocals performed by the cover duo of Vadim Kochetkov and Alina Cherkasova @bodro.artists',
      },
    ],
  },
  {
    imgAlt: '',
    info: 'info',
    id: 'March_81',
    imgUrl: ImgUrl,
    datePublish: 'March 05, 2023',
    eventDate: 'March 8 at 18:00',
    restaurantName: 'to the S#TI restaurant',
    reservationOfTables: 'reservationOfTables',
    description: 'The program of the celebration:',
    title: '8 bereznya "International Women`s Day» SETi',
    content: 'We invite you to the celebration of "International Women`s Day"',
  },
  {
    imgAlt: '',
    info: 'info',
    id: 'March_82',
    imgUrl: ImgUrl,
    datePublish: 'March 05, 2023',
    eventDate: 'March 8 at 18:00',
    restaurantName: 'to the S#TI restaurant',
    reservationOfTables: 'reservationOfTables',
    description: 'The program of the celebration:',
    title: '8 bereznya "International Women`s Day» SETi',
    content: 'We invite you to the celebration of "International Women`s Day"',
    descriptionContent: [
      {
        list: '- Well-come drink Decordi Prosecco Frizzante with the opportunity to win a real diamond from Zarina Law Firm @zarina_dnepr;',
      },
      {
        list: '- author`s set menu from our chef*.',
      },
      {
        list: '- a fun and incendiary program with contests and raffles from the host of the evening, stand-up comedian Roman Khramenkov @roman_khramenkov',
      },
    ],
  },
  {
    imgAlt: '',
    info: 'info',
    id: 'March_83',
    imgUrl: ImgUrl,
    datePublish: 'March 05, 2023',
    eventDate: 'March 8 at 18:00',
    restaurantName: 'to the S#TI restaurant',
    reservationOfTables: 'reservationOfTables',
    description: 'The program of the celebration:',
    title: '8 bereznya "International Women`s Day» SETi',
    content: 'We invite you to the celebration of "International Women`s Day"',
    descriptionContent: [
      {
        list: '- Well-come drink Decordi Prosecco Frizzante with the opportunity to win a real diamond from Zarina Law Firm @zarina_dnepr;',
      },
      {
        list: '- author`s set menu from our chef*.',
      },
    ],
  },
  {
    imgAlt: '',
    info: 'info',
    id: 'March_4',
    imgUrl: ImgUrl,
    datePublish: 'March 05, 2023',
    eventDate: 'March 8 at 18:00',
    restaurantName: 'to the S#TI restaurant',
    reservationOfTables: 'reservationOfTables',
    description: 'The program of the celebration:',
    title: '8 bereznya "International Women`s Day» SETi',
    content: 'We invite you to the celebration of "International Women`s Day"',
    descriptionContent: [
      {
        list: '- Well-come drink Decordi Prosecco Frizzante with the opportunity to win a real diamond from Zarina Law Firm @zarina_dnepr;',
      },
      {
        list: '- author`s set menu from our chef*.',
      },
    ],
  },
];
