import { cardCategory } from '../../mock';

export const DishesCategory = () => {
  return (
    <section className='w-full flex flex-col gap-6 pt-6'>
      <p className='text-center select-none'>ОСНОВНЕ МЕНЮ</p>
      <h2 className='text-center select-none'>Холодні закуски</h2>
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
// w-full px-2 flex flex-col items-center gap-3 sm:even:flex-row-reverse mobile:px-5 sm:px-6 sm:flex-row lg:gap-6 lg:px-6 lg:m-auto lg:justify-between xl:gap-10 2xl:p-0 desktopLg:gap-9 desktopLg:m-auto 2xl:max-w-[1440px] md:[&>div:nth-child(odd)]:ml-6 md:[&>div:nth-child(odd)]:mr-6 lg:[&>div:nth-child(odd)]:ml-10 lg:[&>div:nth-child(odd)]:mr-10 xl:[&>div:nth-child(odd)]:ml-20 xl:[&>div:nth-child(odd)]:mr-20
