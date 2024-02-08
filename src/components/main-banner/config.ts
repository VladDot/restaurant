import Img from '../../assets/img/mainList/restaurant-seti-01.jpg';
import Img2 from '../../assets/img/mainList/restaurant-seti-02.jpg';
import Img3 from '../../assets/img/mainList/restaurant-seti-03.jpg';
import Img4 from '../../assets/img/mainList/restaurant-seti-04.jpg';
import Img5 from '../../assets/img/mainList/restaurant-seti-05.jpg';
import Img6 from '../../assets/img/mainList/restaurant-seti-06.jpg';
import Img7 from '../../assets/img/mainList/restaurant-seti-16.jpg';
import Img8 from '../../assets/img/mainList/restaurant-seti-17.jpg';

const imgSrs = [Img, Img2, Img3, Img4, Img5, Img6, Img7, Img8];
const content = 'content';
const title = 'title';

export const tmpSrc = imgSrs.map((imgUrl) => {
  return { imgUrl, content, title };
});
