import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { MokMenu } from "../../mock/mokMenu";
import { Banner, DishesCategory } from "../../components";

export const MenuParams = ({}) => {
    const x = useParams();
    const [data, setData] = useState<any>({});
    const [isLoading, setIsLoading] = useState(false);
    console.log(x);
    useEffect(() => {
        try {
            setIsLoading(true);
        } catch (error) {
        } finally {
            setIsLoading(false);
        }
        setData(MokMenu.find((item) => item.id === x.categories));
    }, []);

    console.log(data);
    return (
        <>
            {/* {isLoading && <Loader />} */}

            {!!Object.keys(data).length && !isLoading && (
                <><Banner
                    src={data?.banner.img}
                    title={data?.banner.title}
                    content={data?.banner.text}
                />
                <DishesCategory/></>
                
            )}
        </>
    );
};
