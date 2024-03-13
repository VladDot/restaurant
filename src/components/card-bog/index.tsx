import { CardNews } from '..';
import { IMokCardNews } from '../../mock/mokCardNews';

interface ICardsBlog {
  cardNews: IMokCardNews[];
}

export const CardsBlog: React.FC<ICardsBlog> = ({ cardNews }) => {
  return (
    <section>
      <div className='container py-4 flex flex-wrap justify-between gap-x-8'>
        {cardNews.map((cardNew, index) => {
          return <CardNews key={cardNew.id + index} {...cardNew} />;
        })}
      </div>
    </section>
  );
};
