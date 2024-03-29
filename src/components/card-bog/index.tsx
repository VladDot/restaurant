import { IMokCardNewsProps } from "../../mock/mokCardNews";

import { CardNews } from "./card-news";

interface ICardsBlog {
    cardNews: IMokCardNewsProps[];
}

export const CardsBlog: React.FC<ICardsBlog> = ({ cardNews }) => {
    return (
        <section>
            <div className="container py-4 flex flex-wrap justify-around gap-8">
                {cardNews.map((cardNew, index) => {
                    return (
                        <CardNews
                            {...cardNew}
                            key={cardNew.id + index}
                        />
                    );
                })}
            </div>
        </section>
    );
};
