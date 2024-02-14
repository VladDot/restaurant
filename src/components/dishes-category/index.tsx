import { cardCategory } from '../../mock';

export const DishesCategory = () => {
  return (
    <section className='py-12 w-full flex flex-col gap-10 '>
      {cardCategory.map(({ idCategory, dishes, imgCategory }, indexCardCategory) => {
        return (
          <div
            key={`${idCategory}-${indexCardCategory}`}
            className='min-w-[300px] w-full px-2 flex flex-col items-center gap-3 even:flex-row-reverse mobile:px-5 sm:px-6 sm:flex-row lg:gap-6 lg:px-9 lg:max-w-[1320px] lg:justify-between xl:px-16 xl:gap-10  desktopLg:gap-9 desktopLg:px-0 desktopLg:m-auto 2xl:max-w-[1440px]'
          >
            <div className='max-w-[500px] bg-transparent w-full'>
              <img src={imgCategory} alt='img' className='select-none' />
            </div>

            <div className='flex flex-col gap-y-3 min-w-[300px] w-full max-w-[700px]'>
              {dishes.map(({ idDishes, nameDish, prise, weight }, indexDishes) => {
                return (
                  <div
                    key={`${idDishes}-${indexCardCategory}-${indexDishes}`}
                    className='border-b border-black sm:border-0 bg-transparent '
                  >
                    <div className='flex items-center '>
                      <p className='max-w-[200px] sm:max-w-max select-none'>{nameDish}</p>

                      <span className='border-black sm:border-b border-dotted flex-[1_1] select-none -mb-[5px] mx-2'></span>

                      <span className='select-none'>
                        {prise}

                        <span className='select-none'>грн.</span>
                      </span>
                    </div>
                    <span className='select-none'>{weight}</span>
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
