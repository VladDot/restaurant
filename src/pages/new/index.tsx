import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { IMokCardNewsProps, mokCardNews } from "../../mock/mokCardNews";

import { Banner, Errors, EventNews, Loading } from "../../components";

export const New = () => {
    const params = useParams();

    const [date, setDate] = useState<IMokCardNewsProps | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(false);

    const cardNew = mokCardNews.find((card) => card.id === params.new);

    useEffect(() => {
        const fetchDate = async () => {
            try {
                await cardNew;
                setDate(cardNew);
            } catch (error) {
                console.log("error", error);
            } finally {
                setIsLoading(false);
            }
        };

        setIsLoading(true);
        fetchDate();
    }, [params.new, cardNew]);

    return (
        <>
            {date?.id !== params.new && (
                <Errors
                    url="/"
                    text="Home"
                />
            )}

            {isLoading && <Loading />}

            {!!date && !!Object.keys(date).length && !isLoading && (
                <>
                    <Banner
                        src={date.imgUrl}
                        title={date.title}
                    />
                    <EventNews {...date} />
                </>
            )}
        </>
    );
};
