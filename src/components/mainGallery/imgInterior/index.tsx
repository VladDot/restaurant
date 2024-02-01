export const ImgInterior = ({ images }: { images: any[] }) => {
    return (
        <ul className="w-[49%] ">
            {images.map(({ url, aspect }: any, idx: number) => (
                <li
                    key={`key1_img_${idx}`}
                    className={` ${aspect} bg-cover mb-6 items-center flex group-hover:bg-black justify-center  hover:opacity-50 z-1  transition-all duration-300 easy-in-out group`}
                    style={{ backgroundImage: `url(${url})` }}
                >
                    <div className=" relative w-[80%] hover:w-[80%] h-[100%] before:border-secondTextHover  border-secondTextHover   hover:border-2 group-hover:border-secondTextHover before:hover:border-2 before:group-hover:border-secondTextHover before:w-[120%]  before:h-[90%]  before:contents-'' before:absolute z-100 before:z-101 before:-left-[10%] before:top-[5%] before:hover:top-[5%] before:hover:-right-[10%]  transition-all  easy-in-out before:transition-all before:hover:duration-700 hover:duration-700 before:easy-in-out before:hover:delay-300 duration-0 before:duration-0 hover:scale-90"></div>
                </li>
            ))}
        </ul>
    );
};
