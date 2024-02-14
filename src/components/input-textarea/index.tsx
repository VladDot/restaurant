import { ChangeEvent, useState } from 'react';
import { Field, FieldProps } from 'formik';

interface IInputTextareaProps {
  name: string;
  placeholder: string;
}

export const InputTextarea = ({ name, placeholder }: IInputTextareaProps) => {
  const [countValue, setCountValue] = useState(0);
  return (
    <Field name={name}>
      {({ form, field, meta }: FieldProps) => {
        const handleChange = async (event: ChangeEvent<HTMLTextAreaElement>) => {
          setCountValue(event.target.value.length);
          await form.setFieldValue(name, event.target.value.slice(0, 129));
        };
        return (
          <div className='w-full'>
            <div className='px-3 py-1 w-full h-[110px] border-secondText border-2 rounded flex relative gap-1'>
              <textarea
                name={name}
                placeholder={placeholder}
                value={field.value}
                onChange={handleChange}
                className='w-full bg-transparent focus:outline-none resize-none '
              />
            </div>
            {countValue !== 0 && (
              <span className='text-fourth'>max symbols: {130 - countValue} out of 130</span>
            )}
            {meta.error && meta.touched && (
              <span className='absolute left-2 top-8 select-none'>{meta.error}</span>
            )}
          </div>
        );
      }}
    </Field>
  );
};
