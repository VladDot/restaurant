import Img from "../../assets/img/mainList/restaurant-seti-01.jpg";
import Img2 from "../../assets/img/mainList/restaurant-seti-02.jpg";
import Img3 from "../../assets/img/mainList/restaurant-seti-03.jpg";
import Img4 from "../../assets/img/mainList/restaurant-seti-04.jpg";
import Img5 from "../../assets/img/mainList/restaurant-seti-05.jpg";
import Img6 from "../../assets/img/mainList/restaurant-seti-06.jpg";
import Img7 from "../../assets/img/mainList/restaurant-seti-16.jpg";
import Img8 from "../../assets/img/mainList/restaurant-seti-17.jpg";

interface IImg {
    url: string;
    id: string;
    aspect?: string;
}

export const imgList: { [key: string]: IImg[] } = {
    key1: [
        { url: Img, id: "1", aspect: "aspect-[1.91]" },
        { url: Img2, id: "2", aspect: "aspect-[1]" },
    ],
    key2: [
        { url: Img3, id: "1", aspect: "aspect-[1.5]" },
        { url: Img4, id: "2", aspect: "aspect-[1]" },
    ],
    key3: [
        { url: Img5, id: "1", aspect: "aspect-[0.8]" },
        { url: Img6, id: "2", aspect: "aspect-[1.5]" },
    ],
    key4: [
        { url: Img7, id: "1", aspect: "aspect-[1]" },
        { url: Img8, id: "2", aspect: "aspect-[1.5]" },
    ],
};
