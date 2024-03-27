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
    <div className='w-full sm:max-w-[48%] lg:max-w-[31%] flex flex-col rounded overflow-hidden border-gray-200 ease-in-out transition-all duration-300 hover:shadow-[0px_5px_18px_5px_rgba(0,0,0,0.3)] hover:shadow-thirdBg'>
      <Link
        to={id}
        className='w-full hover:shadow-[0_25px_30px_-15px_rgba(0,0,0,0.3)] shadow-none ease-in-out transition-all duration-300'
        onClick={() => scrollToTop('auto')}
      >
        <img className='w-full' src={imgUrl} alt={imgAlt + -+id} />
      </Link>
      <div className='py-5 flex flex-col gap-4 px-3 text-[rgba(74,74,74,0.6)] border-[1px]'>
        <Link
          to={id}
          onClick={() => scrollToTop('auto')}
          className='px-8 py-2 ease-in-out transition-all duration-300 rounded-full bg-gray-300 hover:bg-fourthBg [&>h3]:hover:text-white '
        >
          <h3 className='select-none text-center font-secondFont text-lg font-bold text-fourthBg'>
            {title}
          </h3>
        </Link>
        <p className='select-none text-sm'>{datePublish}</p>
        <h4 className='select-none text-base font-bold text-[rgba(74,74,74,0.6)]'>{content}</h4>
        <p className='select-none'>{restaurantName}</p>
        <p className='select-none text-sm'>{eventDate}</p>
      </div>
    </div>
  );
};
