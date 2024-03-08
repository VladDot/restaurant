import { useParams } from 'react-router-dom';
import { mokCardNews } from '../../mock/mokCardNews';

export const New = () => {
  const params = useParams();
  const cardNew = mokCardNews.find((card) => card.id === params.new);
  console.log(cardNew);

  return <>dk;jgfshd fnlgvudbfhlugvksbyreh;ghdluifvk. s.fg</>;
};
