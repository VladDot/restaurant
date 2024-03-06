import { Link } from 'react-router-dom';

import { useWidthResize } from '../../../hook/useScroll';
import { categoriesMenu } from '../../../mock';
import { Button } from '../../button';
import { routes } from '../../../constants/routes';

export const CardBasicMenu = () => {
  const { innerWidth } = useWidthResize();
  const firstBlock = Math.floor(categoriesMenu.length / 2);
  return (
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

      {innerWidth > 1024 && (
        <>
          <p className='px-2 hidden lg:block'>
            The menu of SETI restaurant is designed with global food trends in mind.
          </p>

          <Button
            textContent='Watch in full'
            className='max-w-[280px] mx-auto '
            route={routes.menu}
          />
        </>
      )}
    </div>
  );
};
