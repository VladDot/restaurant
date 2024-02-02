import { Form, Formik } from 'formik';
import { Button } from '../../button';
import { InputField, InputTel, InputDate, InputTextarea } from '../../index';
import { validationSchema } from './config';

const initialValues = {
  phone: '',
  date: Date,
  firstName: '',
  postContent: '',
  numberPersons: '',
};

export const FormBooking = () => {
  return (
    <div className='flex flex-col '>
      <p className='text-secondText'>RESERVATION</p>
      <h2 className='text-secondText'>Reserve a table or banquet</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);

          resetForm();
        }}
      >
        <Form>
          <InputField name='firstName' type='text' placeholder='firstName' />
          <InputTel name='phone' type='tel' placeholder='your phone' />
          <InputTel name='numberPersons' type='number' placeholder='Persons' />
          <InputDate name='date' type='date' />
          <InputTextarea name='postContent' />
          <Button textContent='Submit' type='submit' className='max-w-[220px]' />
        </Form>
      </Formik>
    </div>
  );
};
