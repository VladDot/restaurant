interface IGalleryCardProps {
    id: string;
    imgUrl: string;
    setIsOpen: any;
    setOpenId: any;
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
            className="relative max-w-[45%]  sm:max-w-[250px] lg:max-w-[300px] xl:max-w-[350px] cursor-zoom-in group  transition-all duration-300 easy-in-out group before:content-['] before:block before:w-full before:h-full before:absolute before:top-0 before:left-0 before:opacity-0 before:bg-black hover:before:animate-blurBlack overflow-hidden"
        >
            <img
                alt={id}
                src={imgUrl}
                className=" aspect-[1.4]"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] group-hover:w-[80%] h-[100%] before:border-secondTextHover group-hover:border-2 border-secondTextHover group-hover:before:border-2 group-hover:before:border-secondTextHover before:w-[130%]  before:h-[90%] before:contents-'' before:absolute  before:-left-[15%] before:top-[5%] group-hover:before:top-[5%] group-hover:before:-right-[10%]  transition-all easy-in-out before:transition-all group-hover:before:duration-300 group-hover:duration-300 before:easy-in-out group-hover:before:delay-[100ms] duration-0 before:duration-0 group-hover:scale-90 group-hover:before:scale-90 z-0"></div>

            <span className=" absolute top-0 left-0 w-full h-full after:absolute after:contents-[''] after:block after:w-[40px] after:h-[5px] after:bg-secondText after:top-1/2 after:left-1/2 after:-translate-x-1/2 before:absolute before:contents-[''] before:blok before:w-[40px] before:h-[5px] before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:rotate-90 before:bg-secondText group-hover:animate-scalePluse scale-0 bg-second z-[11111]"></span>
        </div>
    );
};