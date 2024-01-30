import Cookies from "js-cookie";

import i18n from "../../i18n";

export const LngSwitcher = ({}) => {
    const activeLanguage = Cookies.get("i18next");

    const changeLng = (lng: string) => {
        console.log(1);

        i18n.changeLanguage(activeLanguage === "ua" ? "en" : "ua");

        window.location.reload();
    };
    return (
        <button onClick={() => changeLng("ua")}>
            {activeLanguage === "ua" ? "ua" : "en"}
        </button>
    );
};
