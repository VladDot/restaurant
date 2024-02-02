import { ChangeEvent } from 'react';
import { Field, FieldProps } from 'formik';

interface IInputTextareaProps {
  name: string;
  placeholder: string;
}

export const InputTextarea = ({ name, placeholder }: IInputTextareaProps) => {
  return (
    <Field name={name}>
      {({ form, field, meta }: FieldProps) => {
        const handleChange = async (event: ChangeEvent<HTMLTextAreaElement>) => {
          await form.setFieldValue(name, event.target.value.slice(0, 130));
        };
        return (
          <div className='w-full'>
            <div className='px-3 py-1 w-full h-fit border-secondText border-2 rounded flex items-center relative gap-1'>
              <textarea
                name={name}
                placeholder={placeholder}
                value={field.value}
                onChange={handleChange}
                className='w-full bg-transparent h-fit focus:outline-none resize-none '
              />
            </div>

            {meta.error && meta.touched && (
              <span className='absolute left-2 top-8 select-none'>{meta.error}</span>
            )}
          </div>
        );
      }}
    </Field>
  );
};
