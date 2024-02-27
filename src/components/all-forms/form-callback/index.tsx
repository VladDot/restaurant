import { Form, Formik, FormikHelpers } from "formik";

import { IValuesProps, initialValues, validationSchema } from "./config";
import { Button, InputField, InputNumbers } from "../../../components";

export const FormCallback = () => {
    const onSubmit = async (
        values: IValuesProps,
        { resetForm }: FormikHelpers<IValuesProps>
    ) => {
        await new Promise((resolve) => setTimeout(resolve, 5000));
        resetForm();
        if (true) return;
    };
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ isSubmitting }) => (
                <Form className="text-secondText w-full max-w-[500px] flex flex-col gap-4 items-end justify-center">
                    <InputField
                        type="text"
                        name="firstName"
                        placeholder="firstName"
                        disabled={isSubmitting}
                    />
                    <InputNumbers
                        name="phone"
                        type="tel"
                        placeholder="your phone"
                        disabled={isSubmitting}
                    />
                    <Button
                        type="submit"
                        textContent="Submit"
                        disabled={isSubmitting}
                        className="max-w-[280px]"
                        isSubmitting={isSubmitting}
                    />
                </Form>
            )}
        </Formik>
    );
};
