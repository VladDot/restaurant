import { Form, Formik } from 'formik';
import { Button } from '../../button';
import { InputField } from '../../input-field';
import { InputTel } from '../../input-field-tel';
import { InputDate } from '../../index';

const initialValues = {
  date: '',
  time: '',
  phone: '',
  email: '',
  firstName: '',
  numberPersons: '',
};

export const FormBooking = () => {
  return (
    <div className='flex flex-col'>
      <p>RESERVATION</p>
      <h2>Reserve a table or banquet</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <InputField name='firstName' type='text' placeholder='firstName' />
          <InputTel name='phone' type='tel' placeholder='your phone' />
          <InputTel name='numberPersons' type='number' placeholder='Persons' />
          <InputDate name='date' type='date' placeholder='Date' />
          <Button textContent='Submit' type='submit' className='max-w-[220px]' />
        </Form>
      </Formik>
    </div>
  );
};
