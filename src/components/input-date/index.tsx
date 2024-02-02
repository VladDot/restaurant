import { Field, FieldProps } from 'formik';
import { ChangeEvent } from 'react';

interface IInputDateProps {
  name: string;
  type: string;
}
// TODO input value
export const InputDate = ({ name, type }: IInputDateProps) => {
  return (
    <Field name={name}>
      {({ form, field, meta }: FieldProps) => {
        const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
          form.setFieldValue(name, event.target.value);
        };

        return (
          <div className='px-3 py-1 w-full border-secondText border-2 rounded flex items-center relative gap-1'>
            <input
              type={type}
              value={field.value}
              className='w-full bg-transparent focus:outline-none'
              readOnly
            />
            <input
              name={name}
              type={type}
              value={field.value}
              onChange={handleChange}
              pattern='[0-9]{2}-[0-9]{2}-[0-9]{4}'
              className='w-[20px] bg-transparent focus:outline-none'
            />
          </div>
        );
      }}
    </Field>
  );
};
