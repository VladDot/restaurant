import { SubTitle, Title } from '../../components';
import { RenderDishes } from '../render-dishes';

const mock = {};

//TODO finish to DessertMenu

export const DessertMenu = () => {
  return (
    <>
      <section>
        <div className='container'>
          <Title text='sweet' />
          <SubTitle text='dessert menu' />
          <div>
            <div>
              <img src='' alt='' />
            </div>
            {/* <RenderDishes /> */}
          </div>
        </div>
      </section>
    </>
  );
};
