import { Form, Formik, FormikHelpers } from "formik";

import {
    Title,
    Button,
    SubTitle,
    InputDate,
    InputField,
    InputNumbers,
    InputTextarea,
} from "../../../components";

import { IValuesProps, initialValues, validationSchema } from "./config";

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
        <div className="w-full py-3 flex flex-col gap-2 text-secondText bg-black mobile:flex-row flex-wrap mobile:justify-center mobile:items-center">
            <Title
                uppercase
                text="reservation"
            />
            <SubTitle text="Order a table or banquet" />
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className="w-full h-full flex flex-col px-3 gap-6 justify-center items-center min-w-[320px] max-w-[568px]">
                        <InputField
                            name="firstName"
                            type="text"
                            placeholder="firstName"
                            disabled={isSubmitting}
                        />

                        <InputNumbers
                            name="phone"
                            type="tel"
                            placeholder="phone"
                            disabled={isSubmitting}
                        />

                        <InputNumbers
                            name="numberPersons"
                            type="number"
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
    );
};
