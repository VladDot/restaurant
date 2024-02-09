import { Link } from 'react-router-dom';

import { eventsLink } from '../../mock';

export const EventsPromotions = () => {
  return (
    <section className='bg-secondBg flex flex-col gap-6 py-6'>
      <h3 className='text-center text-secondText'>EVENTS AND PROMOTIONS IN THE RESTAURANT</h3>
      <div className='max-w-[1110px] w-full flex flex-wrap justify-around m-auto gap-2'>
        {eventsLink.map(({ id, link, srcImg }) => {
          return (
            <Link key={`event-prom-card-${id}`} to={link} className='max-w-[310px]'>
              <img className='w-full max-w-[310px]' src={srcImg} alt='img menu' />
            </Link>
          );
        })}
      </div>
    </section>
  );
};
