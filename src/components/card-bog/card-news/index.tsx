import { Link } from 'react-router-dom';
import { IMokCardNewsProps } from '../../../mock/mokCardNews';
import { scrollToTop } from '../../../helpers';

export const CardNews: React.FC<IMokCardNewsProps> = ({
  id,
  imgUrl,
  imgAlt = 'image',
  title,
  datePublish,
  content,
  restaurantName,
  eventDate,
}) => {
  return (
    <div className='w-full md:max-w-[320px] lg:max-w-[350px] flex flex-col gap-4 border-[1px] rounded overflow-hidden border-gray-200'>
      <Link
        to={id}
        className='w-full hover:shadow-[0_25px_30px_-15px_rgba(0,0,0,0.3)] shadow-none ease-in-out transition-colors'
        onClick={() => scrollToTop('auto')}
      >
        <img className='w-full' src={imgUrl} alt={imgAlt + -+id} />
      </Link>
      <div className=' flex flex-col gap-4 px-3'>
        <Link
          to={id}
          className='px-8 py-2 ease-in-out transition-colors rounded-full bg-gray-300 hover:bg-fourthBg [&>h3]:hover:text-white [&>h3]:text-fourthBg [&>h3]:font-medium'
        >
          <h3 className='select-none text-center'>{title}</h3>
        </Link>
        <p className='select-none'>{datePublish}</p>
        <h4 className='select-none'>{content}</h4>
        <p className='select-none'>{restaurantName}</p>
        <p className='select-none'>{eventDate}</p>
      </div>
    </div>
  );
};
