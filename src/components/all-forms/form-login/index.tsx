import { Form, Formik, FormikHelpers } from "formik";

import { IValuesProps, initialValues, validationSchema } from "./config";

import { Button, InputField } from "../../../components";

export const FormLogin = () => {
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
            onSubmit={onSubmit}
            initialValues={initialValues}
            validationSchema={validationSchema}
        >
            {({ isSubmitting }) => (
                <Form className="w-full flex flex-col gap-6 justify-center items-center max-w-[568px]">
                    <InputField
                        type="text"
                        name="login"
                        placeholder="enter"
                        disabled={isSubmitting}
                    />
                    <InputField
                        name="password"
                        type="password"
                        placeholder="enter"
                        disabled={isSubmitting}
                    />

                    <Button
                        type="submit"
                        textContent="Submit"
                        disabled={isSubmitting}
                        isSubmitting={isSubmitting}
                        className="max-w-[260px] ml-auto text-secondText"
                    />
                </Form>
            )}
        </Formik>
    );
};
