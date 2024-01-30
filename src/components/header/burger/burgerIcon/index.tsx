interface MyComponentProps {
    isActive: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BurgerIcon: React.FC<MyComponentProps> = ({
    isActive,
    setActive,
}) => {
    const blockScroll = () => {
        setActive(!isActive);
        document.body.style.overflow = isActive ? "auto" : "hidden";
        console.log(isActive);
    };
    return (
        <div
            onClick={blockScroll}
            className={
                isActive === false
                    ? `menu z-[888] desktop:hidden hover:scale-125 transition-all duration-300`
                    : `menu active z-[888] desktop:hidden hover:scale-125 transition-all duration-300`
            }
        >
            <svg viewBox="0 0 64 48">
                <path
                    d="M19,15 L45,15 C70,15 58,-2 49.0177126,7 L19,37"
                    stroke="#A78963"
                ></path>
                <path
                    d="M19,24 L45,24 C61.2371586,24 57,49 41,33 L32,24"
                    stroke="#A78963"
                ></path>
                <path
                    d="M45,33 L19,33 C-8,33 6,-2 22,14 L45,37"
                    stroke="#A78963"
                ></path>
            </svg>
        </div>
    );
};
