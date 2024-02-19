import { Form, Formik } from 'formik';
import { Button } from '../../button';
import {
  InputField,
  InputNumbers,
  InputDate,
  InputTextarea,
  FormTitle,
  FormSubTitle,
} from '../../../components';
import { initialValues, validationSchema } from './config';

//TODO добавить <legend> на все input
export const FormBooking = () => {
  return (
    <div className='w-full py-3 flex flex-col gap-2 text-secondText bg-black mobile:flex-row flex-wrap mobile:justify-center mobile:items-center'>
      <FormTitle uppercase text='reservation' />
      <FormSubTitle text='Order a table or banquet' />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);

          resetForm();
        }}
      >
        <Form className='w-full h-full flex flex-col px-3 gap-6 justify-center items-center min-w-[320px] max-w-[568px]'>
          <InputField name='firstName' type='text' placeholder='firstName' />
          <InputNumbers name='phone' type='tel' placeholder='your phone' />
          <InputNumbers name='numberPersons' type='number' placeholder='Persons' />
          <InputDate name='date' type='date' />
          <InputTextarea name='comment' placeholder='your comment' />
          <Button textContent='Submit' type='submit' className='max-w-[220px] ml-auto' />
        </Form>
      </Formik>
    </div>
  );
};
