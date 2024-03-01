export const LanguageSelector = () => {
    return (
        <select
            defaultValue="UA"
            className="bg-black bg-opacity-0 border-none text-xl font-bold transition-all duration-300 ease-out hover:scale-110 cursor-pointer hover:text-secondTextHover"
        >
            <option
                value="EN"
                className="text-black list"
            >
                EN
            </option>
            <option
                className="text-black list"
                value="UA"
            >
                UA
            </option>
        </select>
    );
};
