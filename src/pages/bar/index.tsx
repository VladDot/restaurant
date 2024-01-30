import { useTranslation } from "react-i18next";

export const Bar = () => {
    const { t, i18n } = useTranslation();
    return (
        <div>
            <p> TEST</p>
            <p> TEST</p>
            <p> TEST</p>
            <p> TEST</p>
            <p> TEST</p>
            <p> TEST</p>
            <p> TEST</p>
            <p> TEST</p>
            <p> TEST</p>
            <p> {t("Welcome to React")}</p>
            <p>{t("TEST")} </p>
            <p> TEST</p>
            <p> TEST</p>
            <p> TEST</p>
            <p> TEST</p>
            <p> TEST</p>
            <p> TEST</p>
            <p> TEST</p>
            <p> TEST</p>
            <p> TEST</p>
            <p> TEST</p>
            <p> TEST</p>
            <p> TEST</p>
            <p> TEST</p>
            <p> TEST</p>
            <p> TEST</p>
            <p> TEST</p>
            <p> TEST</p>
            <p> TEST</p>
        </div>
    );
};
