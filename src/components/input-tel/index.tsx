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
          if (Number(event.target.value) < 0) return;

          form.setFieldValue(name, event.target.value.trim());
        };
        return (
          <div className='w-full'>
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
            {meta.error && meta.touched && (
              <span className='w-full text-rose-400 pl-3'>{meta.error}</span>
            )}
          </div>
        );
      }}
    </Field>
  );
};
