import { IMokCardNewsProps } from '../../mock/mokCardNews';

export const EventNews: React.FC<IMokCardNewsProps> = ({
  id,
  info,
  imgUrl,
  content,
  eventDate,
  imgUrlPage,
  description,
  imgUrlPageAlt,
  restaurantName,
  descriptionContent,
  reservationOfTables,
}) => {
  return (
    <section>
      <div className='container flex flex-col gap-6 py-6'>
        <h2 className='select-none'>{content}</h2>

        <p className='select-none'>{restaurantName}</p>

        <span className='select-none'>{eventDate}</span>

        {!!imgUrlPage?.length && (
          <div className='max-w-xs'>
            <img className='w-full object-contain' src={imgUrlPage} alt={imgUrlPageAlt} />
          </div>
        )}

        {!!descriptionContent?.length && (
          <>
            <h3 className='select-none'>{description}</h3>
            <ul className='px-4 flex flex-col gap-3'>
              {descriptionContent.map(({ list }, index) => {
                return (
                  <li className='select-none' key={'list' + id + index}>
                    {list}
                  </li>
                );
              })}
            </ul>
          </>
        )}

        <span>{info}</span>
        <p>{reservationOfTables}</p>
      </div>
    </section>
  );
};
