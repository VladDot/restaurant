import { Form, Formik } from 'formik';

import { initialValues, validationSchema } from './config';
import { Button, InputField, InputNumbers } from '../../../components';

export const FormCallback = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className='text-secondText w-full max-w-[500px] flex flex-col gap-4 items-end justify-center'>
        <InputField name='firstName' type='text' placeholder='firstName' />
        <InputNumbers name='phone' type='tel' placeholder='your phone' />
        <Button textContent='Submit' type='submit' className='max-w-[280px]' />
      </Form>
    </Formik>
  );
};
