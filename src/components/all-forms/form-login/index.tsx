import { Form, Formik } from 'formik';
import { InputField } from '../input-field';

import { Button } from '../../button';
import { initialValues, validationSchema } from './config';

export const CreateForm = () => {
  return (
    <div className='w-full p-3 flex flex-col gap-2 text-white bg-black mobile:flex-row flex-wrap mobile:justify-center mobile:items-center'>
      <h3 className='text-center w-full select-none'>Login-in</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className='w-full h-full flex flex-col gap-6 justify-center items-center max-w-[568px]'>
          <InputField name='login' type='text' placeholder='enter' />
          <InputField name='password' type='password' placeholder='enter' />

          <Button textName='submit' type='submit' />
        </Form>
      </Formik>
    </div>
  );
};
