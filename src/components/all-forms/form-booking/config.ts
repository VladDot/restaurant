import * as Yup from 'yup';

interface IValuesProps {
  date: string;
  time: string;
  phone: string;
  firstName: string;
  numberPersons: string;
}

export const initialValues: IValuesProps = {
  time: '',
  phone: '',
  date: '',
  firstName: '',
  numberPersons: '',
};

export const validationSchema = Yup.object().shape({
  firstName: Yup.string().trim('space'),
});
