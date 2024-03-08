import { Banner, CardNews } from '../../components';
import { mokCardNews } from '../../mock/mokCardNews';

export const Blog = () => {
  return (
    <>
      <Banner />
      {mokCardNews.map((cardNew) => {
        return <CardNews {...cardNew} />;
      })}
    </>
  );
};
