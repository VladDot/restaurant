import { Button } from '../button';
import { tmpSrcFood } from '../../mock';
import { routes } from '../../constants/routes';
import { ImgInterior } from '../mainGallery/imgInterior';

import './style.css';

export const FoodGallery = () => {
  return (
    <section className='container pt-20 items-center'>
      <h2 className='mb-5 text-[18px] text-center font-serif text-secondText'>ГАЛЕРЕЯ СТРАВ</h2>
      <h1 className='mb-20 text-[42px] text-center'>Вишуканість та натуральність</h1>
      <div>
        <ul className='flex gallery-dishes justify-between flex-wrap w-full gap-y-3'>
          {tmpSrcFood.map(({ imgUrl, aspectMenu }, idx) => (
            <ImgInterior
              url={imgUrl}
              aspect={aspectMenu}
              className='gallery-dishes'
              key={`ImageInterior-foodGallery-${idx}`}
            />
          ))}
        </ul>
      </div>
      <Button
        route={routes.gallery}
        textContent='Дивитись усю галерею'
        className='w-[22%] m-auto mt-10 h-[60px]'
      />
    </section>
  );
};
