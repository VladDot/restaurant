import ImgUrl from '../assets/img/blog/8-march_2023-motion-1080x1080_thumbnail.png';

interface IDescriptionListProps {
  list?: string;
}
export interface IMokCardNewsProps {
  id: string;
  title?: string;
  imgUrl?: string;
  imgAlt?: string;
  content?: string;
  restaurantName?: string;
  datePublish?: string;
  description?: string;
  eventDate?: string;
  descriptionContent?: IDescriptionListProps[];
}

export const mokCardNews: IMokCardNewsProps[] = [
  {
    id: 'March_8',
    imgUrl: ImgUrl,
    imgAlt: '',
    title: '8 bereznya "International Women`s Day» SETi',
    datePublish: 'March 05, 2023',
    content: 'We invite you to the celebration of "International Women`s Day"',
    restaurantName: 'to the S#TI restaurant',
    eventDate: 'March 8 at 18:00',
    description: 'The program of the celebration:',
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
    id: 'March_1',
    imgUrl: ImgUrl,
    imgAlt: '',
    title: '8 bereznya "International Women`s Day» SETi',
    datePublish: 'March 05, 2023',
    content: 'We invite you to the celebration of "International Women`s Day"',
    restaurantName: 'to the S#TI restaurant',
    eventDate: 'March 8 at 18:00',
    description: 'The program of the celebration:',
  },
  {
    id: 'March_2',
    imgUrl: ImgUrl,
    imgAlt: '',
    title: '8 bereznya "International Women`s Day» SETi',
    datePublish: 'March 05, 2023',
    content: 'We invite you to the celebration of "International Women`s Day"',
    restaurantName: 'to the S#TI restaurant',
    eventDate: 'March 8 at 18:00',
    description: 'The program of the celebration:',
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
    id: 'March_3',
    imgUrl: ImgUrl,
    imgAlt: '',
    title: '8 bereznya "International Women`s Day» SETi',
    datePublish: 'March 05, 2023',
    content: 'We invite you to the celebration of "International Women`s Day"',
    restaurantName: 'to the S#TI restaurant',
    eventDate: 'March 8 at 18:00',
    description: 'The program of the celebration:',
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
    id: 'March_4',
    imgUrl: ImgUrl,
    imgAlt: '',
    title: '8 bereznya "International Women`s Day» SETi',
    datePublish: 'March 05, 2023',
    content: 'We invite you to the celebration of "International Women`s Day"',
    restaurantName: 'to the S#TI restaurant',
    eventDate: 'March 8 at 18:00',
    description: 'The program of the celebration:',
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
