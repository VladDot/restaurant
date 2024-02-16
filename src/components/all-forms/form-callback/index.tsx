import { Form, Formik } from 'formik';

import { initialValues, validationSchema } from './config';
import { Button, InputField, InputNumbers } from '../../index';

export const FormCallback = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className='text-secondText min-w-[320px] max-w-[500px]'>
        <InputField name='firstName' type='text' placeholder='firstName' />
        <InputNumbers name='phone' type='tel' placeholder='your phone' />
        <Button textContent='Submit' type='button' className='max-w-[280px]' />
      </Form>
    </Formik>
  );
};
