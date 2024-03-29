import './style.css';

import { tmpSrcFood } from '../../mock';
import { Button, ImgInterior, SubTitle, Title } from '../../components';
import { routes } from '../../constants/routes';
import { scrollToTop } from '../../helpers';

interface IFoodGalleryProps {
  className?: string;
}

export const FoodGallery: React.FC<IFoodGalleryProps> = ({ className }) => {
  return (
    <section>
      <div className={`py-20 container ${className}`}>
        <Title text='галерея страв' uppercase className='mb-5 sectionTitle' />

        <SubTitle text='Вишуканість та натуральність' className='mb-20 sectionSubTitle' />

        <ul className='flex gallery-dishes justify-between flex-wrap w-full gap-1 lg:gap-y-3 mb-4 lg:mb-8'>
          {tmpSrcFood.map(({ imgUrl, aspectMenu }, idx) => (
            <ImgInterior
              url={imgUrl}
              aspect={aspectMenu}
              className='gallery-dishes'
              key={`ImageInterior-foodGallery-${idx}`}
            />
          ))}
        </ul>

        <Button
          onClick={() => scrollToTop('auto')}
          route={routes.gallery}
          textContent='Дивитись усю галерею'
          className='max-w-[250px] mx-auto font-medium'
        />
      </div>
    </section>
  );
};
