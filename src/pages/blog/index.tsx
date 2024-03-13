import { Banner, CardsBlog } from '../../components';
import { mokCardNews } from '../../mock/mokCardNews';

export const Blog = () => {
  return (
    <>
      <Banner title='Promotions and publications' content='Blog' />
      <CardsBlog cardNews={mokCardNews} />
    </>
  );
};
