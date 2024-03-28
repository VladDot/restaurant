import { Title } from '../title';
import { imgList } from './config';
import { ImgInterior } from './imgInterior/index';

export const MainGallery = () => {
  return (
    <>
      <section className='bg-secondBg '>
        <div className='   py-[60px] main-text text-center text-secondText'>
          <Title className='mb-5' uppercase text='ІНТЕР`ЄР НАШОГО РЕСТОРАНУ' />
          <div className='  flex flex-wrap lg:flex-nowrap w-full gap-1 lg:gap-8'>
            {imgList.map((lists, idx) => {
              const content = lists.map((img, idxImg) => (
                <ImgInterior {...img} key={`${idx}-${idxImg}-gallery`} />
              ));
              return (
                <ul className='w-[49%]' key={`${idx}_main-gallery`}>
                  {content}
                </ul>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
