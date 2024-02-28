interface IGalleryCardProps {
    id: string;
    imgUrl: string;
    setIsOpen: any,
    setOpenId: any
}

export const GalleryCard: React.FC<IGalleryCardProps> = ({
    id,
    imgUrl,
    setOpenId,
    setIsOpen,
}) => {
    const openModal = (id: string) => {
        setOpenId(id);
        setIsOpen(true);
    };
    return (
        <div
            onClick={() => openModal(id)}
            className=" max-w-[45%]  sm:max-w-[250px] lg:max-w-[300px] xl:max-w-[350px] "
        >
            <img
                className=" aspect-[1.4]"
                src={imgUrl}
                alt={id}
            />
        </div>
    );
};
