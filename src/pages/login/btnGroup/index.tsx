import clsx from "clsx";

interface IBtnGroupProps {
    text: string;
    isActive?: boolean;
    setIsActive: (value: boolean | null) => void;
}

export const BtnGroup: React.FC<IBtnGroupProps> = ({
    text,
    isActive = true,
    setIsActive,
}) => {
    const handleChange = () => {
        setIsActive(true);
    };
    console.log(isActive);

    return (
        <div className="flex border-2 rounded-2x justify-center items-center max-w-[280px] w">
            <button
                onClick={() => handleChange()}
                className={clsx("w-full border-r-2 p-2 px-4 ", {
                    "bg-yellow-500": isActive,
                    "bg-green-500": !isActive,
                })}
            >
                {text}
            </button>
        </div>
    );
};
