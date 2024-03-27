import { CardNews } from '..';
import { IMokCardNewsProps } from '../../mock/mokCardNews';

interface ICardsBlog {
  cardNews: IMokCardNewsProps[];
}

export const CardsBlog: React.FC<ICardsBlog> = ({ cardNews }) => {
  return (
    <section>
      <div className='container py-4 flex flex-wrap justify-around gap-8'>
        {cardNews.map((cardNew, index) => {
          return <CardNews key={cardNew.id + index} {...cardNew} />;
        })}
      </div>
    </section>
  );
};
