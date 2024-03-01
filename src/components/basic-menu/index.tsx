import { Link } from 'react-router-dom';

import { Button, SubTitle, Title } from '../../components';
import { categoriesMenu } from '../../mock';
import { routes } from '../../constants/routes';
import ImgBanner from '../../assets/img/chingri3.png';
import { CardBasicMenu } from './card-basic-menu';

export const BasicMenu = () => {
  const firstBlock = Math.floor(categoriesMenu.length / 2);

  return (
    <section>
      <div className='container flex flex-col gap-7 py-6'>
        <Title text='basic' />
        <SubTitle text='Restaurant menu' />

        <div className='flex flex-wrap gap-8 justify-center lg:flex-nowrap lg:items-stretch lg:justify-around '>
          <CardBasicMenu />
          <div className='flex flex-col gap-6 w-1/2 lg:max-w-[300px] justify-between'>
            <ul className='pl-8 list-disc flex flex-col gap-3 '>
              {categoriesMenu.slice(0, firstBlock).map(({ name, title, url }, index) => {
                return (
                  <li key={`${name}-${index}`}>
                    <Link to={url}>{title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className='w-full lg:max-w-fit '>
            <img src={ImgBanner} alt='img banner' className='w-full max-w-[350px] mx-auto' />
          </div>

          <div className='flex flex-col gap-6 max-w-[300px] justify-between'>
            <ul className='pl-8 list-disc flex flex-col gap-3 '>
              {categoriesMenu.slice(firstBlock).map(({ name, title, url }, index) => {
                return (
                  <li key={`${name}-${index}`}>
                    <Link to={url}>{title}</Link>
                  </li>
                );
              })}
            </ul>

            <p className='px-2'>
              The menu of the restaurant "SETI" is developed taking into account the world food
              trends. It can satisfy even the most sophisticated guest.
            </p>

            <Button
              textContent='Watch in full'
              className='max-w-[280px] mx-auto'
              route={routes.menu}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
