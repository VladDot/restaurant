import { getStyles } from "../style";

interface IBtnGroupProps {
    id: number;
    text: string;
    isActive?: boolean;
    isRevers?: boolean;
    setIsActive: (value: boolean | undefined) => void;
    setIsRevers: (value: boolean | undefined) => void;
}

export const BtnGroup: React.FC<IBtnGroupProps> = ({
    text,
    isActive,
    isRevers = true,
    setIsActive,
    setIsRevers,
}) => {
    const handleChange = () => {
        setIsActive(true);
        setIsRevers(isRevers);
    };
    const { btnStyle, textStyle } = getStyles(isActive);
    console.log(isRevers, "isRevers");

    return (
        <div className="flex justify-center items-center max-w-[280px] min-w-[130px] w-full ">
            <button
                disabled={isActive}
                onClick={() => handleChange()}
                className={btnStyle}
            >
                <p className={textStyle}>{text}</p>
            </button>
        </div>
    );
};
