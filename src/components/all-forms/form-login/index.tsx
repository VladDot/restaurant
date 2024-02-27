import { Form, Formik, FormikHelpers } from 'formik';

import { Button, Title, InputField } from '../../../components';
import { IValuesProps, initialValues, validationSchema } from './config';

export const FormLogin = () => {
  const onSubmit = async (values: IValuesProps, { resetForm }: FormikHelpers<IValuesProps>) => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    resetForm();
    console.log(values);
    if (true) return;
  };
  return (
    <div className='w-full p-3 flex flex-col gap-2 text-secondText bg-black mobile:flex-row flex-wrap mobile:justify-center mobile:items-center'>
      <Title text='log-in' />

      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ isSubmitting }) => (
          <Form className='w-full h-full flex flex-col gap-6 justify-center items-center max-w-[568px]'>
            <InputField name='login' type='text' placeholder='enter' disabled={isSubmitting} />
            <InputField
              name='password'
              type='password'
              placeholder='enter'
              disabled={isSubmitting}
            />

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
    </div>
  );
};
