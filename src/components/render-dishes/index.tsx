interface IRenderDishesProps {
  prise: string;
  weight: string;
  idDishes: string;
  nameDish: string;
  indexDishes: number;
  indexCardCategory?: number;
}

export const RenderDishes: React.FC<IRenderDishesProps> = ({
  prise,
  weight,
  idDishes,
  nameDish,
  indexDishes,
  indexCardCategory,
}) => {
  return (
    <div
      key={`${idDishes}-${indexCardCategory}-${indexDishes}`}
      className='border-b border-black sm:border-0 bg-transparent '
    >
      <div className='flex items-center'>
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
};
