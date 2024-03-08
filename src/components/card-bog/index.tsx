import { Link } from 'react-router-dom';

interface IMokCardNews {
  id: string;
  imgUrl: string;
  imgAlt: string;
  title: string;
  datePublish: string;
  content: string;
  subContent: string;
  secondaryContent: string;
}

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
    <div>
      <Link to={id}>
        <img src={imgUrl} alt={id} />
      </Link>
      <div>
        <Link to={id}>
          <h3>{title}</h3>
        </Link>
        <p>{datePublish}</p>
        <p>{content}</p>
        <p>{subContent}</p>
        <p>{secondaryContent}</p>
      </div>
    </div>
  );
};
