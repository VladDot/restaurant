import * as Yup from "yup";

interface IValuesProps {
    login: string;
    password: string;
}

export const initialValues: IValuesProps = {
    login: "",
    password: "",
};

export const validationSchema = Yup.object().shape({
    login: Yup.string()
        .min(4, "min 4 symbols")
        .max(12, "max 12 symbols")
        .matches(/^\w*$/, "invalid symbol or no spaces allowed")
        .matches(/^\S*$/)
        .required("the field can't hit empty."),
    password: Yup.string()
        .min(6, "min 6 symbols")
        .max(16, "max 16 symbols")
        .matches(/^\w*$/, "invalid symbol or no spaces allowed")
        .matches(/^\S*$/)
        .required("the field can`t hit empty."),
});
