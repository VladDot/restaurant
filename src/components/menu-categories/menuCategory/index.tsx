import { FC, useState } from 'react';

import { Button } from '../../index';
import { scrollToTop } from '../../../helpers';
import { getStyles } from '../../style';

interface IMenuCategoryProps {
  img: string;
  url: string;
  title: string;
}

export const MenuCategory: FC<IMenuCategoryProps> = ({ img, title, url }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isBluerAnimate, setIsBluerAnimate] = useState<undefined | boolean>(undefined);

    const { emergingContent, bluerAnimateFoodMenu } = getStyles({
        isBluerAnimate,
    });
    return (
        <li
            onMouseEnter={() => {
                setIsBluerAnimate(true);
                setTimeout(() => {
                    setIsDisabled(true);
                }, 200);
            }}

            onMouseLeave={() => {
                setIsBluerAnimate(false);
                setTimeout(() => {
                    setIsDisabled(false);
                }, 200);
            }}
            
            className="relative md:max-w-[50%] w-full h-[230px] md:h-[390px] overflow-hidden group/item "
        >
            <span
                style={{ backgroundImage: `url(${img})` }}
                className="relative scale-[1.5] lg:scale-[1.3] flex bg-cover h-full transition-all duration-700  easy-in-out group-hover/item:-translate-x-0 bg-transparent -translate-x-[60px]"
            ></span>

      <div className={bluerAnimateFoodMenu} />

      {isDisabled && (
        <div className={emergingContent}>
          <h1 className='text-4xl px-2 text-center mb-8 text-white'>{title}</h1>

          <Button
            route={url}
            textContent='Відкрити меню'
            onClick={() => scrollToTop('auto')}
            className='max-w-[250px] transition-all group-hover/item:scale-110 duration-300 easy-in-out [&>span]:text-white'
          />
        </div>
      )}
    </li>
  );
};
