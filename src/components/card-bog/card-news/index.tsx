import { Link } from 'react-router-dom';
import { IMokCardNews } from '../../../mock/mokCardNews';
import { scrollToTop } from '../../../helpers';

export const CardNews: React.FC<IMokCardNews> = ({
  id,
  imgUrl,
  imgAlt,
  title,
  datePublish,
  content,
  subContent,
  secondaryContent,
}) => {
  return (
    <div className='w-full md:max-w-[320px] lg:max-w-[350px] flex flex-col gap-4 border-[1px] border-gray-200'>
      <Link to={id} className='w-full' onClick={() => scrollToTop()}>
        <img className='w-full' src={imgUrl} alt={imgAlt + -+id} />
      </Link>
      <div className=' flex flex-col gap-4 px-3'>
        <Link to={id}>
          <h3>{title}</h3>
        </Link>
        <p>{datePublish}</p>
        <h4>{content}</h4>
        <p>{subContent}</p>
        <p>{secondaryContent}</p>
      </div>
    </div>
  );
};
