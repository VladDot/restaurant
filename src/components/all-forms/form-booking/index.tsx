import { Form, Formik } from 'formik';
import { Button } from '../../button';
import { InputField, InputNumbers, InputDate, InputTextarea } from '../../index';
import { initialValues, validationSchema } from './config';

export const FormBooking = () => {
  return (
    <div className='w-full my-[50px] flex flex-col gap-2 text-secondText bg-black mobile:flex-row flex-wrap mobile:justify-center mobile:items-center'>
      <p className='text-secondText w-full text-center'>RESERVATION</p>
      <h2 className='text-secondText w-full text-center'>Reserve a table or banquet</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);

          resetForm();
        }}
      >
        <Form className='w-full h-full flex flex-col gap-6 justify-center items-center max-w-[568px]'>
          <InputField name='firstName' type='text' placeholder='firstName' />
          <InputNumbers name='phone' type='tel' placeholder='your phone' />
          <InputNumbers name='numberPersons' type='number' placeholder='Persons' />
          <InputDate name='date' type='date' />
          <InputTextarea name='comment' placeholder='your comment' />
          <Button textContent='Submit' type='submit' className='max-w-[220px]' />
        </Form>
      </Formik>
    </div>
  );
};
