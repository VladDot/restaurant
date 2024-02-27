import { RequestCallback, SubTitle, Title } from '../../components';
import { organizationBanquets } from './mock';
export const OrganizationBanquets = () => {
  return (
    <section>
      <div className='container'>
        <div>
          <p className='text-center'>
            Don't let the questions of how to organize a celebration scare you - we can take care of
            most of the responsibilities.
          </p>
          <Title text='PROVIDE ADDITIONAL SERVICES' uppercase />
          <SubTitle text='For organizing banquets' />
        </div>
      </div>
      <div className='flex'>
        {organizationBanquets.map(({ id, imgUrl, altText, title, content }, index) => {
          return (
            <div
              key={`${id}-${index}`}
              className='w-full max-w-[475px] aspect-square relative flex items-center justify-center'
            >
              <div className='w-[100%] absolute z-0 overflow-hidden h-full'>
                <img src={imgUrl} alt={altText} className='w-[120%] ' />
              </div>
              <div className='w-full h-full absolute z-10 bg-bgFormRequestCallback opacity-40' />
              <div className='relative z-40 flex flex-col items-center justify-center gap-4 px-7 text-thirdText'>
                <h3>{title}</h3>
                <p>{content}</p>
              </div>
            </div>
          );
        })}
      </div>
      <RequestCallback />
    </section>
  );
};
