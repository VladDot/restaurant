import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { MokMenu } from "../../mock/mokMenu";
import { Banner, DishesCategory, Loading } from "../../components";

interface IDataProps {
    id: string;
    banner: {
        title: string;
        subtitle: string;
        img: string;
    };
    content: {
        title: string;
        subTitle: string;
        cardCategory: {
            idCategory: string;
            imgCategory: string;
            dishes: {
                idDishes: string;
                nameDish: string;
                prise: string;
                weight: string;
            }[];
        }[];
    };
}
export const MenuParams = () => {
    const params = useParams();
    const [data, setData] = useState<IDataProps | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataFind = await MokMenu.find(
                    (item) => item.id === params.categories
                );
                setData(dataFind);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setIsLoading(false);
            }
        };

        setIsLoading(true);
        fetchData();
    }, [params.categories]);

    console.log(data);
    return (
        <>
            {isLoading && <Loading />}
            {data && !!Object.keys(data).length && !isLoading && (
                <>
                    <Banner
                        src={data.banner.img}
                        title={data.banner.title}
                        content={data.banner.subtitle}
                    />
                    <DishesCategory />
                </>
            )}
        </>
    );
};
