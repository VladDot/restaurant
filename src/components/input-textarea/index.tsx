import { ChangeEvent } from 'react';
import { Field, FieldProps } from 'formik';

interface IInputTextareaProps {
  name: string;
}

export const InputTextarea = ({ name }: IInputTextareaProps) => {
  return (
    <Field name={name}>
      {({ form, field, meta }: FieldProps) => {
        const handleChange = async (event: ChangeEvent<HTMLTextAreaElement>) => {
          await form.setFieldValue(name, event.target.value);
        };
        return (
          <div className='px-3 py-1 w-full border-secondText border-2 rounded flex items-center relative gap-1'>
            <textarea
              name={name}
              value={field.value}
              onChange={handleChange}
              className='w-full bg-transparent focus:outline-none resize-none'
            />
          </div>
        );
      }}
    </Field>
  );
};
