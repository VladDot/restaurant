import { Form, Formik, FormikHelpers } from "formik";

import {
    Button,
    InputDate,
    FormTitle,
    InputField,
    InputNumbers,
    FormSubTitle,
    InputTextarea,
} from "../../../components";

import { IValuesProps, initialValues, validationSchema } from "./config";

//TODO добавить <legend> на все input
export const FormBooking = () => {
    const onSubmit = async (
        values: IValuesProps,
        { resetForm }: FormikHelpers<IValuesProps>
    ) => {
        // Simulate an asynchronous operation (e.g., API call) with a 5-second delay
        await new Promise((resolve) => setTimeout(resolve, 5000));
        if (true) return;
        // After 5 seconds, reset the form and log the values
        resetForm();
        console.log(values);
    };
    return (
        <div className="w-full py-3 flex flex-col gap-2 text-secondText bg-black mobile:flex-row flex-wrap mobile:justify-center mobile:items-center">
            <FormTitle
                uppercase
                text="reservation"
            />
            <FormSubTitle text="Order a table or banquet" />
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
                        />
                        <InputNumbers
                            name="phone"
                            type="tel"
                            placeholder="your phone"
                        />
                        <InputNumbers
                            name="numberPersons"
                            type="number"
                            placeholder="Persons"
                        />
                        <InputDate
                            name="date"
                            disabled={isSubmitting}
                        />
                        <InputTextarea
                            name="comment"
                            placeholder="your comment"
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
