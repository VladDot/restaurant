import * as Yup from 'yup';

export interface IValuesProps {
  date: string;
  time: string;
  phone: string;
  comment: string;
  firstName: string;
  numberPersons: number | '';
}

export const initialValues: IValuesProps = {
  time: '',
  date: '',
  phone: '',
  comment: '',
  firstName: '',
  numberPersons: '',
};

export const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(
      /^\p{Lu}\p{Ll}*$/u,
      'the first letter must be a capital letter or an invalid character'
    )
    .min(4, 'min 4 symbols')
    .max(16, 'max 16 symbols')
    .required("the field can't be empty."),
  phone: Yup.string()
    .matches(/^\+\d{2}\(\d{3}\)\d{3} \d{2} \d{2}$/, {
      message: 'The phone number must be in the format +1234567890',
      // excludeEmptyString: false,
    })
    .required('Required Phone'),
  numberPersons: Yup.number().max(60, 'max 60 Persons').integer().required('Required Persons'),
  date: Yup.date().required('Required Date'),

  comment: Yup.string(),
});
