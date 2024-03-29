import { Link } from 'react-router-dom';

import { routes } from '../../constants/routes';

import ImgBanner from '../../assets/img/chingri3.png';
import { Button, SubTitle, Title } from '../../components';
import { useWidthResize } from '../../hook/useScroll';

import { ICategoriesMenuProps } from '../../mock';
import { scrollToTop } from '../../helpers';

interface IBasicMenuProps {
  categoriesMenu: ICategoriesMenuProps[];
}

//TODO to think about  responding to the elements
export const BasicMenu = ({ categoriesMenu }: IBasicMenuProps) => {
  const { innerWidth } = useWidthResize();

  const firstBlock = Math.floor(categoriesMenu.length / 2);

  return (
    <section>
      <div className='container flex flex-col gap-7 py-6'>
        <Title text='basic' className='sectionTitle' uppercase />
        <SubTitle text='Restaurant menu' className='sectionSubTitle' />

        <div className='flex flex-wrap gap-8 justify-center lg:flex-nowrap lg:justify-around '>
          <div className='flex flex-col gap-6 w-full sm:w-2/4 lg:max-w-[300px] justify-between'>
            <ul className='pl-8 list-disc flex flex-col gap-3 w-1/3 lg:w-1/2'>
              {categoriesMenu.slice(0, firstBlock).map(({ name, title, url }, index) => {
                return (
                  <li key={`${name}-${index}`} className='font-semibold '>
                    <Link
                      className='hover:text-secondText ease-in-out transition-colors duration-150'
                      to={url}
                    >
                      {title}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {innerWidth > 1024 && (
              <>
                <p className='px-2 hidden select-none lg:block font-secondFont text-fourth'>
                  The menu of SETI restaurant is designed with global food trends in mind.
                </p>

                <Button
                  route={routes.menu}
                  textContent='Watch in full'
                  className='max-w-[280px] mx-auto font-medium'
                  onClick={() => scrollToTop('auto')}
                />
              </>
            )}
          </div>

          <div className='w-full lg:max-w-fit '>
            <img src={ImgBanner} alt='img banner' className='w-full max-w-[350px] mx-auto' />
          </div>

          <div className='flex flex-col gap-6 w-full sm:w-2/4 lg:max-w-[300px] justify-between'>
            <ul className='pl-8 list-disc flex flex-col gap-3'>
              {categoriesMenu.slice(firstBlock).map(({ name, title, url }, index) => {
                return (
                  <li key={`${name}-${index}`} className='font-semibold'>
                    <Link
                      className='hover:text-secondText ease-in-out transition-colors duration-150'
                      to={url}
                    >
                      {title}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <p className='px-2 font-secondFont text-fourth select-none'>
              The menu of the restaurant "SETI" is developed taking into account the world food
              trends. It can satisfy even the most sophisticated guest.
            </p>

            <Button
              route={routes.menu}
              textContent='Watch in full'
              className='max-w-[280px] mx-auto font-medium'
              onClick={() => scrollToTop('auto')}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
