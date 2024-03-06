import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { mokGallery } from '../../mock/mokGallery';
import { Banner, Errors, GallerySwiper, Loading } from '../../components';

interface IDataImageProps {
  id: string;
  banner: {
    img: string;
    title: string;
    subtitle: string;
  };
  imgList: { imgUrl: string; id: string }[];
}

export const ImageParams = () => {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<IDataImageProps | undefined>(undefined);

  const dataFind = mokGallery.find((item) => item.id === params.categories);
  useEffect(() => {
    const fetchData = async () => {
      try {
        await dataFind;
        setData(dataFind);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    setIsLoading(true);
    fetchData();
  }, [params.categories, dataFind]);

  return (
    <>
      {data?.id !== params.categories && <Errors text='GALLERY' url='/gallery' />}
      {isLoading && <Loading />}

      {data && !!Object.keys(data).length && !isLoading && (
        <>
          <Banner src={data.banner.img} title={data.banner.title} content={data.banner.subtitle} />

          <GallerySwiper {...data} />
        </>
      )}
    </>
  );
};
