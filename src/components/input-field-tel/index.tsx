import { Field, FieldProps } from 'formik';
import { ChangeEvent } from 'react';

interface IInputTelProps {
  name: string;
  type: string;
  placeholder: string;
}

export const InputTel = ({ name, type, placeholder }: IInputTelProps) => {
  return (
    <Field name={name}>
      {({ form, field, meta }: FieldProps) => {
        const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
          console.log(event.target.value);
          form.setFieldValue(name, event.target.value);
        };
        return (
          <div className='px-3 py-1 w-full border-secondText border-2 rounded flex items-center relative gap-1'>
            <input
              name={name}
              type={type}
              value={field.value}
              onChange={handleChange}
              placeholder={placeholder}
              className='w-full bg-transparent focus:outline-none'
            />
          </div>
        );
      }}
    </Field>
  );
};
