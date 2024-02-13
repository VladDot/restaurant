import { cardCategory } from '../../mock';

export const DishesCategory = () => {
  return (
    <section className='py-12 w-full flex flex-col gap-10 '>
      {cardCategory.map(({ id, dishes, imgCategory }, indexCardCategory) => {
        return (
          <div
            key={`${id}-${indexCardCategory}`}
            className='min-w-[300px] px-2 flex flex-col sm:flex-row gap-3 lg:gap-6 items-center even:flex-row-reverse '
          >
            <div className='max-w-[500px] bg-transparent'>
              <img src={imgCategory} alt='img' />
            </div>
            <div className='flex flex-col gap-y-3 min-w-[300px] w-full '>
              {dishes.map(({ id, nameDish, prise, weight }, indexDishes) => {
                return (
                  <div
                    key={`${id}-${indexCardCategory}-${indexDishes}`}
                    className='border-b border-black sm:border-0 bg-transparent '
                  >
                    <div className='flex items-center'>
                      <p className='max-w-[200px] sm:max-w-max'>{nameDish}</p>
                      <span className=' border-black sm:border-b border-dotted flex-[1_1] -mb-[5px] mx-2'></span>
                      <span className=''>
                        {prise}
                        <span>грн.</span>
                      </span>
                    </div>
                    <span>{weight}</span>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
};
