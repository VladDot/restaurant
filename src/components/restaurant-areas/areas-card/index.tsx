import { useState } from "react";

import { Modal } from "../../modal";
import { Button } from "../../button";

interface IAreasCardProps {
    link?: string;
    text?: string;
    imgSrc: string;
    title?: string;
    technicalEquipment?: string;
}

export const AreasCard: React.FC<IAreasCardProps> = ({
    text,
    link,
    title,
    imgSrc,
    technicalEquipment,
}) => {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className="relative w-full lg:w-[50%] h-[500px] overflow-hidden group/item">
            <div
                className="relative scale-[1.5] lg:scale-[1.3] flex bg-cover h-full transition-all duration-500  easy-in-out group-hover/item:-translate-x-0 bg-transparent -translate-x-[60px]"
                style={{ backgroundImage: `url(${imgSrc})` }}
            />

            <div className="absolute transition-all duration-500 easy-in-out  cursor-pointer w-full h-full  top-0 left-0 opacity-0 bg-black group-hover/item:animate-blurBlackFoodMenu overflow-hidden" />

            <div className="absolute w-full h-full flex flex-col gap-y-[100px] justify-end items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  p-2">
                <div className="flex flex-col justify-center items-center gap-y-5 group-hover/item:mb-10 transition-all duration-500  easy-in-out">
                    <h1 className="text-xl mb-3 text-center text-white w-[150px]">
                        {title}
                    </h1>

                    <p className="text-white text-center text-lg">{text}</p>

                    <Button
                        route={link}
                        textContent="Відкрити меню"
                        className="max-w-[280px] [&>span]:text-white "
                    />
                </div>

                <Button
                    onClick={() => setIsActive(true)}
                    type="button"
                    textContent="Відкрити меню"
                    className="max-w-[250px]  [&>span]:text-white "
                />
                {isActive && (
                    <Modal
                        isOpen={isActive}
                        onClose={setIsActive}
                    >
                        <div className="max-w-[280px] sm:max-w-[400px] w-full  bg-thirdBg relative top-1/2  -translate-y-1/2 left-1/2 -translate-x-1/2 flex justify-center items-center p-4 border-2 rounded-lg shadow-md shadow-white">
                            <p className="text-center text-lg text-white">
                                {technicalEquipment}
                            </p>
                        </div>
                    </Modal>
                )}
            </div>
        </div>
    );
};
