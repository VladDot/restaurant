import clsx from "clsx";

interface IBtnGroupProps {
    text: string;
    isActive?: boolean;
    isRevers?: boolean;
    setIsActive: (value: boolean | null) => void;
    setIsRevers: (value: boolean | null) => void;
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
    console.log(isActive);

    return (
        <div className="flex justify-center items-center max-w-[280px] min-w-[130px] w-full">
            <button
                disabled={!!isActive}
                onClick={() => handleChange()}
                className={clsx(
                    "w-full p-2 px-4 transition-all duration-500 ease-out ",
                    {
                        "before:w-0 bg-yellow-500 before:contents[''] before:absolute before:h-full before:left-0 before:bottom-0 ":
                            isActive,
                        "before:w-full ": !isActive,
                    }
                )}
            >
                {text}
            </button>
        </div>
    );
};
/* content: "";
  position: absolute;
  height: 100%;
  width: 0;
  background : #fff;
  left: 0;
  bottom: 0;
  transition: all .3s;
  opacity: 0.3; */
