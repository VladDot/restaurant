import { Instagram } from "../../assets/svg";

export interface IsvgBanquet {
    text: string;
    svg: React.FC;
}

export const svgBanquet: IsvgBanquet[] = [
    { svg: Instagram, text: "Авторська кухня Дитяче меню" },
    { svg: Instagram, text: "Асортиментна алкогольна карта" },
    { svg: Instagram, text: "Доброзичливе обслуговування" },
    { svg: Instagram, text: "Розумна цінова політика" },
    { svg: Instagram, text: "Іменинникам надається знижка у день народження" },
];
