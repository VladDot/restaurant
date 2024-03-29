import { Button, SubTitle, Title } from '../../components';
import { scrollToTop } from '../../helpers';
import { RenderDishes } from '../render-dishes';

interface IPrevueMenuProps {
  idCategory: string;
  imgCategory: string;
  title: string;
  subTitle: string;
  route: string;
  textContent: string;
  dishes: {
    idDishes: string;
    nameDish: string;
    prise: string;
    weight: string;
  }[];
}
// React.FC<IPrevueMenuProps>
export const PrevueMenu: React.FC<IPrevueMenuProps> = ({
  idCategory,
  imgCategory,
  title,
  subTitle,
  route,
  textContent,
  dishes,
}) => {
  return (
    <>
      <section>
        <div className='container py-8 flex flex-col gap-6'>
          <Title text={title} uppercase className='sectionTitle' />

          <SubTitle text={subTitle} className='sectionSubTitle' />

          <div className='w-full flex flex-col items-center justify-center sm:gap-4 sm:even:flex-row-reverse md:gap-12  sm:flex-row desktop:justify-between desktop:even:pr-14 desktop:odd:pl-14 container'>
            <div className='max-w-[500px] bg-transparent w-full '>
              <img
                src={imgCategory}
                alt='title'
                className='select-none aspect-square object-contain '
              />
            </div>

            <div className='flex flex-col gap-y-3 w-full max-w-[700px]'>
              {dishes.map((dish, indexDishes) => {
                return (
                  <RenderDishes
                    {...dish}
                    indexDishes={indexDishes}
                    key={dish.idDishes + indexDishes}
                  />
                );
              })}

              <Button
                route={route}
                textContent={textContent}
                className='max-w-[280px] mx-auto font-medium'
                onClick={() => scrollToTop('auto')}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
