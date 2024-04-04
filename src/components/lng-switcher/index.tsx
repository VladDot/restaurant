import Cookies from "js-cookie";

import i18n from "../../i18n/i18n";

export const LngSwitcher = () => {
    const activeLanguage = Cookies.get("i18next");

    const changeLng = () => {
        const changedLang = activeLanguage === "ua" ? "en" : "ua";
        i18n.changeLanguage(changedLang);

        window.location.reload();
    };
    return (
        <button onClick={() => changeLng()}>
            {activeLanguage === "ua" ? "ua" : "en"}
        </button>
    );
};
