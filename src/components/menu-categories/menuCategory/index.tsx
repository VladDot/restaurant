import { FC, useState } from 'react';

import { Button } from '../../index';
import { scrollToTop } from '../../../helpers';

interface IMenuCategoryProps {
  img: string;
  title: string;
  url: string;
}

export const MenuCategory: FC<IMenuCategoryProps> = ({ img, title, url }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  return (
    <li
      onMouseEnter={() => setIsDisabled(true)}
      onMouseLeave={() => setIsDisabled(false)}
      className='relative md:max-w-[50%] w-full h-[230px] md:h-[390px] overflow-hidden group/item '
    >
      <span
        style={{ backgroundImage: `url(${img})` }}
        className='relative scale-[1.5] lg:scale-[1.3] flex bg-cover h-full transition-all duration-500  easy-in-out group-hover/item:-translate-x-0 bg-transparent -translate-x-[60px]'
      ></span>

      <div className='absolute transition-all duration-500 easy-in-out  cursor-pointer w-full h-full  top-0 left-0 opacity-0 bg-black group-hover/item:animate-blurBlackFoodMenu overflow-hidden' />

      {isDisabled && (
        <div className='absolute w-full group-hover/item:flex flex-col justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  group-hover/item:animate-fadeIn '>
          <h1 className='text-4xl px-2 text-center mb-8 text-white'>{title}</h1>

          <Button
            route={url}
            textContent='Відкрити меню'
            onClick={() => scrollToTop('auto')}
            className='max-w-[250px]  transition-all group-hover/item:scale-110 duration-300  easy-in-out [&>span]:text-white'
          />
        </div>
      )}
    </li>
  );
};
