import { Form, Formik, FormikHelpers } from 'formik';
import { InputField } from '../input-field';

import { Button } from '../../button';

interface IValuesProps {
  login: string;
  password: string;
}

const initialValues = {
  login: '',
  password: '',
  // validatePassword: '',
};

export const CreateForm = () => {
  return (
    <div>
      <h3>Login</h3>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <InputField name='login' type='text' placeholder='enter' />
          <InputField name='password' type='password' placeholder='enter' />

          <Button textName='submit' type='submit' />
        </Form>
      </Formik>
    </div>
  );
};
