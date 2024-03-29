import { mokCardNews } from '../../mock/mokCardNews';

import { Banner, CardsBlog } from '../../components';

export const Blog = () => {
  return (
    <>
      <Banner title='Promotions and publications' content='Blog' />

      <CardsBlog cardNews={mokCardNews} />
    </>
  );
};
