import { RenderDishes } from '../render-dishes';

//TODOtear up the props DishesCategory , change mock
export const DishesCategory = ({ title, subtitle, cardCategory }) => {
  return (
    <section className='w-full flex flex-col gap-6 pt-6'>
      <p className='text-center select-none'>{title}</p>
      <h2 className='text-center select-none'>{subtitle}</h2>
      {cardCategory.map(({ idCategory, dishes, imgCategory }, indexCardCategory) => {
        return (
          <div
            key={`${idCategory}-${indexCardCategory}`}
            className='w-full flex flex-col items-center justify-center sm:gap-4 sm:even:flex-row-reverse md:gap-12  sm:flex-row desktop:justify-between desktop:even:pr-14 desktop:odd:pl-14 container'
          >
            <div className='max-w-[500px] bg-transparent w-full '>
              <img
                alt={idCategory}
                src={imgCategory}
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
                    indexCardCategory={indexCardCategory}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
};
