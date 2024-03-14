import ImgUrl from '../assets/img/blog/8-march_2023-motion-1080x1080_thumbnail.png';
import ImgUrl1 from '../assets/img/button-bar.png';

export interface IMokCardNews {
  id: string;
  imgUrl: string;
  imgAlt: string;
  title: string;
  datePublish: string;
  content: string;
  subContent: string;
  secondaryContent: string;
}

export const mokCardNews: IMokCardNews[] = [
  {
    id: 'March_8',
    imgUrl: ImgUrl,
    imgAlt: '',
    title: '8 bereznya "International Women`s Day» SETi',
    datePublish: 'March 05, 2023',
    content: 'We invite you to the celebration of "International Women`s Day"',
    subContent: 'to the S#TI restaurant',
    secondaryContent: 'March 8 at 18:00',
  },
  {
    id: 'set-menu',
    imgUrl: ImgUrl1,
    imgAlt: 'qxfwcserg',
    title: 'cwef',
    datePublish: 'cwaef',
    content: 'aececewf',
    subContent: 'eawef',
    secondaryContent: 'wera',
  },
  {
    id: 'set-menu',
    imgUrl: ImgUrl1,
    imgAlt: 'qxfwcserg',
    title: 'cwef',
    datePublish: 'cwaef',
    content: 'aececewf',
    subContent: 'eawef',
    secondaryContent: 'wera',
  },
  {
    id: 'set-menu',
    imgUrl: ImgUrl1,
    imgAlt: 'qxfwcserg',
    title: 'cwef',
    datePublish: 'cwaef',
    content: 'aececewf',
    subContent: 'eawef',
    secondaryContent: 'wera',
  },
  {
    id: 'set-menu',
    imgUrl: ImgUrl1,
    imgAlt: 'qxfwcserg',
    title: 'cwef',
    datePublish: 'cwaef',
    content: 'aececewf',
    subContent: 'eawef',
    secondaryContent: 'wera',
  },
];
