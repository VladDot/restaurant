import { Form, Formik, FormikHelpers } from 'formik';

import { Button, InputField } from '../../../components';
import { IValuesProps, initialValues, validationSchema } from './config';

export const FormLogin = () => {
  const onSubmit = async (values: IValuesProps, { resetForm }: FormikHelpers<IValuesProps>) => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    resetForm();
    if (true) return;
  };
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ isSubmitting }) => (
        <Form className='w-full h-full flex flex-col gap-6 justify-center items-center max-w-[568px]'>
          <InputField name='login' type='text' placeholder='enter' disabled={isSubmitting} />
          <InputField name='password' type='password' placeholder='enter' disabled={isSubmitting} />

          <Button
            type='submit'
            textContent='Submit'
            className='max-w-[260px] ml-auto'
            disabled={isSubmitting}
            isSubmitting={isSubmitting}
          />
        </Form>
      )}
    </Formik>
  );
};
