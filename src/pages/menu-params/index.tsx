import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { MokMenu } from "../../mock/mokMenu";
import { Banner, DishesCategory, Errors, Loading } from "../../components";

interface IDataProps {
    id: string;
    banner: {
        img: string;
        title: string;
        subtitle: string;
    };
    content: {
        title: string;
        subTitle: string;
        cardCategory: {
            idCategory: string;
            imgCategory: string;
            dishes: {
                prise: string;
                weight: string;
                idDishes: string;
                nameDish: string;
            }[];
        }[];
    };
}
export const MenuParams = () => {
    const params = useParams();

    const [data, setData] = useState<IDataProps | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(false);

    const dataFind = MokMenu.find((item) => item.id === params.categories);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await dataFind;
                setData(dataFind);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setIsLoading(false);
            }
        };

        setIsLoading(true);
        fetchData();
    }, [params.categories, dataFind]);

    return (
        <>
            {data?.id !== params.categories && (
                <Errors
                    text="MENU"
                    url="/menu"
                />
            )}
            
            {isLoading && <Loading />}

            {data && !!Object.keys(data).length && !isLoading && (
                <>
                    <Banner
                        src={data.banner.img}
                        title={data.banner.title}
                        content={data.banner.subtitle}
                    />

                    <DishesCategory {...data.content} />
                </>
            )}
        </>
    );
};
