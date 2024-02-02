import * as Yup from 'yup';

interface IValuesProps {
  date: string;
  time: string;
  phone: string;
  comment: string;
  firstName: string;
  numberPersons: number;
}

export const initialValues: IValuesProps = {
  time: '',
  date: '',
  phone: '',
  comment: '',
  firstName: '',
  numberPersons: 2,
};

export const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(4, 'min 4 symbols')
    .max(16, 'max 16 symbols')
    .matches(
      /^\p{Lu}\p{Ll}*$/u,
      'the first letter must be a capital letter or an invalid character'
    )
    .required("the field can't be empty."),
  phone: Yup.string()
    .matches(/^\+\d{10,}$/, 'The phone number must be in the format +1234567890')
    .required('Required Phone'),
  date: Yup.date().required('Required Date'),
  numberPersons: Yup.number()
    .min(1, `min 1 Persons`)
    .max(60, 'max 60 Persons')
    .positive()
    .integer()
    .required('Required Persons'),
});
