import { Form, Formik, FormikHelpers } from "formik";

import { Button, InputField, InputNumbers } from "../../../components";

import { IValuesProps, initialValues, validationSchema } from "./config";

export const FormRegistration = () => {
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
                <Form className="w-full text-secondText flex flex-col px-3 gap-6 justify-center items-center min-w-[320px] max-w-[568px]">
                    <InputField
                        type="text"
                        name="firstName"
                        placeholder="firstName"
                        disabled={isSubmitting}
                    />
                    <InputField
                        type="text"
                        name="lastName"
                        placeholder="lastName"
                        disabled={isSubmitting}
                    />
                    <InputField
                        type="email"
                        name="email"
                        placeholder="email"
                        disabled={isSubmitting}
                    />
                    <InputField
                        type="password"
                        name="password"
                        placeholder="password"
                        disabled={isSubmitting}
                    />
                    <InputField
                        type="password"
                        name="subPassword"
                        disabled={isSubmitting}
                        placeholder="subPassword"
                    />
                    <InputNumbers
                        name="phone"
                        type="tel"
                        placeholder="phone"
                        disabled={isSubmitting}
                    />
                    <Button
                        type="submit"
                        textContent="Submit"
                        className="max-w-[280px] "
                    />
                </Form>
            )}
        </Formik>
    );
};
