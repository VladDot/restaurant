import { Banner } from "../../components";

import ImgBar from "../../assets/img/bar-1.jpg";

export const Bar = () => {
    return (
        <>
            <Banner
                title="Bar"
                content="Bar Bar Bar"
            />

            <div className="container py-10 flex justify-center">
                <img
                    src={ImgBar}
                    alt="img card bar"
                />
            </div>
        </>
    );
};
