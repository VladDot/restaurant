import { RequestCallback, SubTitle, Title } from '../../components';
import { organizationBanquets } from './mock';
export const OrganizationBanquets = () => {
  return (
    <section>
      <div className='container'>
        <div className='flex flex-col gap-6 py-8'>
          <p className='text-center text-md'>
            Don't let the questions of how to organize a celebration scare you - we can take care of
            most of the responsibilities.
          </p>
          <Title className='sectionTitle' text='PROVIDE ADDITIONAL SERVICES' uppercase />
          <SubTitle className='sectionSubTitle' text='For organizing banquets' />
        </div>
      </div>
      {/* //TODO color bg add tailwind */}
      <div className='flex flex-wrap [&>*:nth-child(odd)>*:nth-child(2)]:bg-[#382201]'>
        {organizationBanquets.map(({ id, imgUrl, altText, title, content }, index) => {
          return (
            <div
              key={`${id}-${index}`}
              className='w-full sm:w-[50%] min-w-[320px] aspect-[1.9] lg:aspect-[2.5] xl:flex-nowrap xl:w-[25%] xl:aspect-[1.9] relative flex items-center justify-center group/item '
            >
              <div className='w-[100%] absolute z-0 overflow-hidden h-full'>
                <img
                  src={imgUrl}
                  alt={altText}
                  className='scale-[1.5] translate-x-[60px] transition-all duration-300 group-hover/item:translate-x-0'
                />
              </div>
              <div className='w-full h-full absolute z-10 bg-bgFormRequestCallback opacity-70 group-hover/item:opacity-[.95] transition-all ease-in-out duration-500 group/item' />
              <div className='relative z-40 flex flex-col items-center justify-center gap-4 p-7 text-thirdText group/item'>
                <h3 className='select-none cursor-auto text-center'>{title}</h3>
                <p className='select-none cursor-auto text-center'>{content}</p>
              </div>
            </div>
          );
        })}
      </div>
      <RequestCallback />
    </section>
  );
};
