import { Form, Formik, FormikHelpers } from "formik";

import ImgBanner from "../../../assets/img/form-bg-seti.jpg";

import { IValuesProps, initialValues, validationSchema } from "./config";

import {
    Title,
    Button,
    SubTitle,
    InputDate,
    InputField,
    InputNumbers,
    InputTextarea,
} from "../../../components";

export const FormBooking = () => {
    const onSubmit = async (
        values: IValuesProps,
        { resetForm }: FormikHelpers<IValuesProps>
    ) => {
        await new Promise((resolve) => setTimeout(resolve, 5000));
        resetForm();
        if (true) return;
    };
    return (
        <section
            className="min-h-[768px] h-lvh bg-no-repeat bg-cover bg-fixed flex items-center justify-center relative"
            style={{
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                backgroundRepeat: "no-repeat",
                background: `url(${ImgBanner})`,
            }}
        >
            <div className="absolute z-0 w-full h-full bg-black opacity-75" />
            <div className="relative z-40 w-full py-3 flex flex-col gap-2 text-secondText mobile:flex-row flex-wrap mobile:justify-center mobile:items-center">
                <Title
                    uppercase
                    text="reservation"
                    className="sectionTitle"
                />
                <SubTitle text="Order a table or banquet" />
                <Formik
                    onSubmit={onSubmit}
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                >
                    {({ isSubmitting }) => (
                        <Form className="w-full h-full flex flex-col px-3 gap-6 justify-center items-center min-w-[320px] max-w-[568px]">
                            <InputField
                                type="text"
                                name="firstName"
                                placeholder="firstName"
                                disabled={isSubmitting}
                            />

                            <InputNumbers
                                type="tel"
                                name="phone"
                                placeholder="phone"
                                disabled={isSubmitting}
                            />

                            <InputNumbers
                                type="number"
                                name="numberPersons"
                                placeholder="Persons"
                                disabled={isSubmitting}
                            />

                            <InputDate
                                name="date"
                                disabled={isSubmitting}
                            />

                            <InputTextarea
                                name="comment"
                                placeholder="comment"
                                disabled={isSubmitting}
                            />

                            <Button
                                type="submit"
                                textContent="Submit"
                                disabled={isSubmitting}
                                isSubmitting={isSubmitting}
                                className="max-w-[220px] ml-auto"
                            />
                        </Form>
                    )}
                </Formik>
            </div>
        </section>
    );
};
